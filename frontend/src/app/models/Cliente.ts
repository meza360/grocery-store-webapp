export interface Cliente {
	nitCliente: string;
	nombresCliente: string;
	apellidosCliente: string;
	telefono: string;
	correo: string;
	direccionEntrega: string;
	noTarjeta: string;
	nacionalidad: string;
}

export interface FormCliente {
	correo: string;
	password: string;
}

export interface RegistroCliente {
	nitCliente: string;
	nombresCliente: string;
	apellidosCliente: string;
	telefono: string;
	correo: string;
	direccionEntrega: string;
	noTarjeta: string;
	password: string;
}
