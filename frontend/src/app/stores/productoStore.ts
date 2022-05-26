import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Orden } from '../models/Compra';
import { Producto } from '../models/Producto';
import { generatePdf } from '../tools/generatePdf';

export default class ProductoStore {
	productos: Producto[] = [];
	carrito: Producto[] = [];
	cart: number | Producto[][];
	registroProducto = new Map<string, Producto>();
	productoSeleccionado: Producto | undefined = undefined;
	editMode = false;
	cargando = false;
	cargandoInicial = false;
	totalPedido: number;

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
				this.productos.push(producto);
				this.setProducto(producto);
				this.registroProducto.set(producto.skuId, producto);
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

		let existe = this.carrito.find((x) => x.skuId === producto.skuId);
		if (existe) {
			console.log('Producto ya esta en carretilla');
		} else {
			this.carrito.push(producto);
			this.totalCarrito();
		}

		//this.cart.push(1, producto);
		console.log('Producto agregado al carrito: ' + producto.nombreProducto);
	};

	totalCarrito() {
		this.totalPedido = 0;
		this.carrito.forEach((prod) => {
			this.totalPedido += prod.precio;
		});
		//return this.totalPedido;
	}

	quitarCarrito = (id: string) => {
		let prod = this.carrito.findIndex((a) => a.skuId === id);
		this.carrito.splice(prod, 1);
		this.totalCarrito();
	};

	get listadoCarrito() {
		return this.carrito;
		//return this.cart;
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

	compra = async (datos: Orden) => {
		console.log(this.carrito);
		console.log(this.totalPedido);
		generatePdf(this.carrito, this.totalPedido);
	};
}
