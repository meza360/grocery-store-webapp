import { makeAutoObservable, runInAction } from 'mobx';
import { Cliente, FormCliente, RegistroCliente } from '../models/Cliente';
import agent from '../api/agent';
import { history } from '../../index';

export default class ClienteStore {
	user: Cliente | null;
	logSucceded: boolean = false;
	signSucceded: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	get isLoggedIn() {
		return !!this.user;
	}

	logInSucceded = (value: boolean) => {
		this.logSucceded = value;
	};

	signUpSucceded = (value: boolean) => {
		this.signSucceded = value;
	};

	set userLogged(value) {
		this.user = value;
	}

	login = async (creds: FormCliente) => {
		this.logInSucceded(false);
		try {
			const user = await agent.Clientes.login(creds);
			console.log(user);
			runInAction(() => (this.user = user));
			this.logInSucceded(true);
		} catch (error) {
			this.logInSucceded(false);
			throw error;
		}
	};

	signUp = async (creds: RegistroCliente) => {
		this.logInSucceded(false);
		this.signUpSucceded(false);
		try {
			const user = await agent.Clientes.register(creds);
			console.log(user);
			runInAction(() => (this.user = user));
			this.logInSucceded(true);
			this.signUpSucceded(true);
		} catch (error) {
			this.logInSucceded(false);
			this.signUpSucceded(false);
			throw error;
		}
	};

	logout() {
		this.logInSucceded(false);
		this.signUpSucceded(false);
		this.userLogged(null);
	}
}
