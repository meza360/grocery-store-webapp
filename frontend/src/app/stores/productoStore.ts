import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Producto } from '../models/Producto';

export default class ProductoStore {
	productos: Producto[] = [];
	carrito: Producto[] = [];
	registroProducto = new Map<string, Producto>();
	productoSeleccionado: Producto | undefined = undefined;
	editMode = false;
	cargando = false;
	cargandoInicial = false;

	constructor() {
		makeAutoObservable(this);
	}

	setCargandoInicial = (state: boolean) => {
		this.cargandoInicial = state;
	};

	setProductoSeleccionado = (id: string) => {
		//this.productoSeleccionado = this.productos.find((a) => a.sku_Id === id);
		this.productoSeleccionado = this.registroProducto.get(id);
	};

	cancelProductoSeleccionado = () => {
		this.productoSeleccionado = undefined;
	};

	abrirFormulario = (id?: string) => {
		id ? this.setProductoSeleccionado(id) : this.cancelProductoSeleccionado();
		this.editMode = true;
	};

	cerrarFormulario = () => {
		this.editMode = false;
	};

	crearProducto = async (producto: Producto) => {
		this.cargando = true;

		try {
			await agent.Productos.crear(producto);
		} catch (error) {}
	};

	cargarProductos = async () => {
		this.setCargandoInicial(true);
		try {
			const productos = await agent.Productos.listar();
			productos.forEach((producto) => {
				//this.productos.push(producto);
				this.setProducto(producto);
				//this.registroProducto.set(producto.sku_Id,producto);
			});
			this.setCargandoInicial(false);
		} catch (error) {
			console.log(error);
			this.setCargandoInicial(false);
		}
	};

	cargarProducto = async (id: string) => {
		this.setCargandoInicial(true);
		let producto = this.getProducto(id);
		if (producto) {
			this.productoSeleccionado = producto;
		} else {
			this.setCargandoInicial(true);
			try {
				producto = await agent.Productos.detalles(id);
				this.setProducto(producto);
				this.setProductoSeleccionado(producto.skuId);
				this.setCargandoInicial(false);
				console.log(producto);
			} catch (error) {
				console.log(error);
				this.setCargandoInicial(false);
			}
		}
	};

	agregarCarrito = (id: string) => {
		let producto = this.getProducto(id);
		this.carrito.push(producto);
		console.log('Producto agregado al carrito: ' + producto.nombreProducto);
	};

	quitarCarrito = (id: string) => {
		let prod = this.carrito.findIndex((a) => a.skuId === id);
		this.carrito.splice(prod, 1);
	};

	get listadoCarrito() {
		return this.carrito;
	}

	private setProducto = (producto: Producto) => {
		this.registroProducto.set(producto.skuId, producto);
	};

	private getProducto = (id: string) => {
		return this.registroProducto.get(id);
	};

	get listadoProductos() {
		return Array.from(this.registroProducto.values());
	}
}
