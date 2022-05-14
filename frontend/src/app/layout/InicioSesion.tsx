import React from 'react';
import { observer } from 'mobx-react-lite';
import { Form, FormGroup, FormControl, FormLabel, Image, Button, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function InicioSesion() {
	return (
		<section className="signin-page account">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-md-offset-3">
						<div className="block text-center">
							<a className="logo">
								<Image src="./assets/icons/umg.svg" alt="" />
							</a>
							<h2 className="text-center">Bienvenido de vuelta</h2>
							<Form className="text-left clearfix" action="index.html">
								<FormGroup className="form-group">
									<FormControl
										type="email"
										className="form-control"
										placeholder="Correo electronico"
									/>
								</FormGroup>
								<FormGroup className="form-group">
									<FormControl type="password" className="form-control" placeholder="Contraseña" />
								</FormGroup>
								<div className="text-center">
									<NavItem as={Link} to="/cuenta" className="btn btn-outline-dark text-center">
										Iniciar sesion
									</NavItem>
								</div>
							</Form>
							<p className="mt-20">
								¿Eres nuevo en la pagina?<Link to="/registro">Crear una nueva cuenta</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default observer(InicioSesion);
