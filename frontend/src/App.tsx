import React, { useEffect, useState } from 'react';
import { Container,Card, Image, Button,Stack,Col,Row } from 'react-bootstrap';
import NavigationBar from './app/layout/NavigationBar';
import logo from './logo.svg';
import axios from 'axios';
import { Producto } from './app/models/Producto';

function App() {
	const [ productos, setProductos ] = useState<Producto[]>();

	useEffect(() => {
		axios.get<Producto[]>('http://192.168.0.150:5000/api/producto').then((response) => {
			console.log(response.data);
			setProductos(response.data);
		});
	}, []);

	return (
		<Container className="App">
			<NavigationBar />

			<header /*<!-- Header-->*/ className="bg-dark py-5">
				<Container className="px-4 px-lg-5 my-5">
					<div className="text-center text-white">
						<h1 className="display-4 fw-bolder">Abarroteria UMG</h1>
						<p className="lead fw-normal text-white-50 mb-0">Lo que necesitas, lo encuentras</p>
					</div>
				</Container>
			</header>

			<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
			{
				productos?.map((producto) =>(
					<div className="col mb-5" key={producto.id}>
					<div className="card h-100">
						
						<Image className="card-img-top" src="./assets/svg/apple.svg" alt="..." fluid/>
						
						<div className="card-body p-4">
							<div className="text-center">
								
								<h5 className="fw-bolder">{producto.nombre}</h5>
								
								{producto.precio}
							</div>
						</div>
						
						<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
							<div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
						</div>
					</div>
				</div>
					
				))}
			
			</div>
		
				
				
			
			</Container>
	);
}

export default App;
