import { createContext, useContext } from 'react';
import ClienteStore from './clienteStore';
import EmpleadoStore from './empleadoStore';
import ProductoStore from './productoStore';

interface Store {
	productoStore: ProductoStore;
	empleadoStore: EmpleadoStore;
	clienteStore: ClienteStore;
}

export const store: Store = {
	productoStore: new ProductoStore(),
	empleadoStore: new EmpleadoStore(),
	clienteStore: new ClienteStore()
};

export const StoreContext = createContext(store);

export function useStore() {
	return useContext(StoreContext);
}
