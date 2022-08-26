import { Producto } from './Producto';
import { Proveedor } from './Proveedor';

export interface Lote {
	Id: number;
	Producto: Producto;
	Proveedor: Proveedor;
	PrecioCompra: number;
	PrecioVenta: number;
	PorcentajeGanancia: number;
	FechaProduccion: string;
	FechaCaducidad: string;
	Cantidad: number;
}
