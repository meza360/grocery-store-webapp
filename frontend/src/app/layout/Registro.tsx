import { observer } from 'mobx-react-lite';
import React from 'react';
import { Form, FormGroup, FormControl, FormLabel, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Registro() {
	return (
		<section className="signin-page account">
			<div className="container">
				<div className="row">
					<div className="text-center col-md-12 col-md-offset-3">
						<div className="block text-center">
							<Image className="logo" src="./assets/icons/umg.svg" height={'10%'} />

							<h2 className="text-center">Crea tu cuenta</h2>
							<Form className="text-left clearfix" action="index.html">
								<div className="form-group">
									<FormControl type="text" className="form-control" placeholder="Nombres" />
								</div>
								<div className="form-group">
									<FormControl type="text" className="form-control" placeholder="Apellidos" />
								</div>
								<div className="form-group">
									<FormControl
										type="email"
										className="form-control"
										placeholder="Correo electronico"
									/>
								</div>
								<div className="form-group">
									<FormControl type="password" className="form-control" placeholder="Contraseña" />
								</div>
								<div className="text-center">
									<Button type="submit" className="btn btn-main text-center">
										Registrarte
									</Button>
								</div>
							</Form>
							<p className="mt-20">
								¿Ya tienes una cuenta con nosotros?<Link to="/inicioSesion">Iniciar sesion</Link>
							</p>
							<p>
								<Link to="/">Rastrear pedido </Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default observer(Registro);
