import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from './app/components/NavigationBar';
import axios from 'axios';
import { Producto } from './app/models/Producto';
import { Route, Routes } from 'react-router-dom';
import ListarProductos from './app/layout/ListarProductos';
import DetalleProducto from './app/layout/DetalleProducto';
import { observer } from 'mobx-react-lite';
import Footer from './app/components/Footer';
import CarritoCompras from './app/layout/CarritoCompras';
import CarritoPago from './app/layout/CarritoPago';
import CarritoConfirmacion from './app/layout/CarritoConfirmacion';
import Registro from './app/layout/Registro';
import InicioSesion from './app/layout/InicioSesion';
import CuentaOrdenes from './app/layout/CuentaOrdenes';
import CuentaTarjetas from './app/layout/CuentaTarjetas';
import CuentaDetalles from './app/layout/CuentaDetalles';
import Cuenta from './app/layout/Cuenta';
import CuentaDirecciones from './app/layout/CuentaDirecciones';
import InicioEmpleados from './app/layout/InicioEmpleados';

function App() {
	const [ productos, setProductos ] = useState<Producto[]>();

	useEffect(() => {
		axios.get<Producto[]>('http://192.168.0.150:5000/api/producto').then((response) => {
			//axios.get<Producto[]>('http://10.0.2.6:5000/api/producto').then((response) => {
			console.log(response.data);
			setProductos(response.data);
		});
	}, []);

	return (
		<Container className="app col-md-12">
			<Container>
				<NavigationBar />
				<Routes>
					<Route path="/" element={<ListarProductos />} />
					<Route path="/producto/:id" element={<DetalleProducto />} />
					<Route path="/carritoCompras" element={<CarritoCompras />} />
					<Route path="/carritoPago" element={<CarritoPago />} />
					<Route path="/carritoConfirmacion" element={<CarritoConfirmacion />} />
					<Route path="/registro" element={<Registro />} />
					<Route path="/inicioSesion" element={<InicioSesion />} />
					<Route path="/cuenta/*" element={<Cuenta />} />
					<Route path="/cuentaDetalles" element={<CuentaDetalles />} />
					<Route path="/cuentaOrdenes" element={<CuentaOrdenes />} />
					<Route path="/cuentaDirecciones" element={<CuentaDirecciones />} />
					<Route path="/cuentaTarjetas" element={<CuentaTarjetas />} />
					<Route path="/inicioEmpleados" element={<InicioEmpleados />} />
				</Routes>
			</Container>
			<Footer />
		</Container>
	);
}

export default observer(App);
