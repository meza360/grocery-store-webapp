import axios, { AxiosResponse } from 'axios';
import { Producto } from '../models/Producto';
import { Proveedor } from '../models/Proveedor';
import { Cliente } from '../models/Cliente';
import { Empleado } from '../models/Empleado';

const sleep = (delay: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
};

axios.defaults.baseURL = 'http://192.168.0.150:5000/api';

axios.interceptors.response.use(async (response) => {
	try {
		await sleep(500);
		return response;
	} catch (error) {
		console.log(error);
		return await Promise.reject(error);
	}
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
	post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
	put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
	del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
};

const Productos = {
	listar: () => requests.get<Producto[]>('/producto'),
	detalles: (id: string) => requests.get<Producto>(`/producto/${id}`),
	crear: (producto: Producto) => requests.post<void>('/producto', producto),
	actualizar: (producto: Producto) => requests.put<void>('/producto', producto),
	eliminar: (id: string) => requests.del<void>(`/producto/${id}`)
};

const Proveedores = {
	listar: () => requests.get<Proveedor[]>('/proveedor'),
	detalles: (id: string) => requests.get<Proveedor>(`/proveedor/${id}`),
	crear: (proveedor: Proveedor) => requests.post<void>('/proveedor', proveedor),
	actualizar: (proveedor: Proveedor) => requests.put<void>('/producto', proveedor),
	eliminar: (id: string) => requests.del<void>(`/proveedor/${id}`)
};

const Clientes = {
	listar: () => requests.get<Cliente[]>('/cliente'),
	detalles: (id: string) => requests.get<Cliente>(`/cliente/${id}`),
	crear: (cliente: Cliente) => requests.post<void>('/cliente', cliente),
	actualizar: (cliente: Cliente) => requests.put<void>('/cliente', cliente),
	eliminar: (id: string) => requests.del<void>(`/cliente/${id}`)
};

const Empleados = {
	listar: () => requests.get<Empleado[]>('/empleado'),
	detalles: (id: string) => requests.get<Empleado>(`/empleado/${id}`),
	crear: (empleado: Empleado) => requests.post<void>('/empleado', empleado),
	actualizar: (empleado: Empleado) => requests.put<void>('/empleado', empleado),
	eliminar: (id: string) => requests.del<void>(`/empleado/${id}`)
};

const agent = {
	Productos,
	Proveedores,
	Clientes,
	Empleados
};

export default agent;
