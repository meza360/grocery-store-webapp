import { createContext, useContext } from 'react';
import ProductoStore from './productoStore';

interface Store {
	productoStore: ProductoStore;
}

export const store: Store = {
	productoStore: new ProductoStore()
};

export const StoreContext = createContext(store);

export function useStore() {
	return useContext(StoreContext);
}
