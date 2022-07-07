import { makeAutoObservable } from 'mobx';
import { Empleado } from '../models/Empleado';

export default class EmpleadoStore {
	empleado: Empleado;
	editMode = false;
	cargando = false;
	cargandoInicial = false;

	constructor() {
		makeAutoObservable(this);
	}

	setCargandoInicial = (state: boolean) => {
		this.cargandoInicial = state;
	};

	setIdUsuario = (id: string) => {
		this.empleado.idUsuario = id;
	};

	setPassword = (password: string) => {
		this.empleado.password = password;
	};
}
