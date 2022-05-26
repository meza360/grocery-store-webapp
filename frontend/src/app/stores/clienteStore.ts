import { makeAutoObservable, runInAction } from 'mobx';
import { Cliente, FormCliente } from '../models/Cliente';
import agent from '../api/agent';
import { history } from '../../index';

export default class ClienteStore {
	user: Cliente | null;
	logSucceded: boolean;

	constructor() {
		makeAutoObservable(this);
	}

	get isLoggedIn() {
		return !!this.user;
	}

	login = async (creds: FormCliente) => {
		this.logSucceded = false;
		try {
			const user = await agent.Clientes.login(creds);
			console.log(user);
			runInAction(() => (this.user = user));
			this.logSucceded = true;
		} catch (error) {
			throw error;
		}
	};

	logout() {
		this.logSucceded = false;
		this.user = null;
	}
}
