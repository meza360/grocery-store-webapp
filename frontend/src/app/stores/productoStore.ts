import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Producto } from '../models/Producto';

export default class ProductoStore {
	productos: Producto[] = [];
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

	setProductoSeleccionado = (id: number) => {
		this.productoSeleccionado = this.productos.find((a) => a.sku_Id === id);
	};

	cancelProductoSeleccionado = () => {
		this.productoSeleccionado = undefined;
	};

	abrirFormulario = (id?: number) => {
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
		this.cargando = true;
		try {
			const productos = await agent.Productos.listar();
			productos.forEach((producto) => {
				this.productos.push(producto);
			});
			this.setCargandoInicial(false);
		} catch (error) {
			console.log(error);
			this.setCargandoInicial(false);
		}
	};
}
