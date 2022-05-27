import React from 'react';
import { observer } from 'mobx-react-lite';
import { FormGroup, Image, Button, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useStore } from '../stores/store';

function InicioSesion() {
	const { clienteStore } = useStore();
	const { logSucceded } = clienteStore;

	let boton;
	if (logSucceded) {
		boton = (
			<NavItem as={NavLink} to="/" className="btn btn-outline-dark text-center">
				Bienvenido, ir a compras
			</NavItem>
		);
	} else {
		boton = (
			<Button type="submit" className="btn btn-outline-dark text-center">
				Iniciar sesion
			</Button>
		);
	}

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
							<Formik
								initialValues={{ correo: '', password: '' }}
								onSubmit={(values) => clienteStore.login(values)}
							>
								{({ handleSubmit, isSubmitting }) => (
									<Form className="text-left clearfix" onSubmit={handleSubmit}>
										<FormGroup className="form-group">
											<Field
												type="email"
												name="correo"
												id="correo"
												className="form-control"
												placeholder="Correo electronico"
											/>
										</FormGroup>
										<FormGroup className="form-group">
											<Field
												type="password"
												className="form-control"
												placeholder="Contraseña"
												name="password"
												id="password"
											/>
										</FormGroup>

										<div className="text-center">{boton}</div>
									</Form>
								)}
							</Formik>

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
