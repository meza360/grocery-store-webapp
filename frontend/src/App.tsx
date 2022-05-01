import React, { useEffect, useState } from 'react';
import { Container, Card, Image, Button, Stack, Col, Row } from 'react-bootstrap';
import NavigationBar from './app/components/NavigationBar';
import logo from './logo.svg';
import axios from 'axios';
import { Producto } from './app/models/Producto';
import { Route, Routes } from 'react-router-dom';
import ListarProductos from './app/layout/ListarProductos';
import DetalleProducto from './app/layout/DetalleProducto';
import { observer } from 'mobx-react-lite';
import Footer from './app/components/Footer';

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
		<Container className="App">
			<Container>
				<NavigationBar />
				<Routes>
					<Route path="/" element={<ListarProductos />} />
					<Route path="/detalleProducto" element={<DetalleProducto />} />
				</Routes>
			</Container>
			<Footer />
		</Container>
	);
}

export default observer(App);
