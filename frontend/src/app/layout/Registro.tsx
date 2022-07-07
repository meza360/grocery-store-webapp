import { Formik, Form, Field } from 'formik';
import { observer } from 'mobx-react-lite';
import { Image, Button, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStore } from '../stores/store';

function Registro() {
	const { clienteStore } = useStore();
	const { signUp, signSucceded } = clienteStore;
	let boton;
	if (signSucceded) {
		boton = (
			<NavItem as={Link} to="/" className="btn btn-main text-center">
				Ir a compras
			</NavItem>
		);
	} else {
		boton = (
			<Button type="submit" className="btn btn-main text-center">
				Registrarte
			</Button>
		);
	}

	return (
		<section className="signin-page account">
			<div className="container">
				<div className="row">
					<div className="text-center col-md-12 col-md-offset-3">
						<div className="block text-center">
							<Image className="logo" src="./assets/icons/umg.svg" height={'10%'} />

							<h2 className="text-center">Crea tu cuenta</h2>
							<Formik
								initialValues={{
									nitCliente: '',
									nombresCliente: '',
									apellidosCliente: '',
									telefono: '',
									correo: '',
									direccionEntrega: '',
									noTarjeta: '',
									password: ''
								}}
								onSubmit={(values) => {
									signUp(values);
								}}
							>
								{({ handleSubmit, isSubmitting }) => (
									<Form className="text-left clearfix" onSubmit={handleSubmit}>
										<div className="form-group">
											<Field
												type="test"
												className="form-control"
												name="nitCliente"
												placeholder="Nit"
												required
											/>
										</div>
										<div className="form-group">
											<Field
												type="text"
												className="form-control"
												placeholder="Nombres"
												name="nombresCliente"
												required
											/>
										</div>
										<div className="form-group">
											<Field
												type="text"
												className="form-control"
												placeholder="Apellidos"
												name="apellidosCliente"
												required
											/>
										</div>
										<div className="form-group">
											<Field
												type="test"
												className="form-control"
												placeholder="Telefono"
												name="telefono"
												required
											/>
										</div>
										<div className="form-group">
											<Field
												type="email"
												className="form-control"
												placeholder="Correo electronico"
												name="correo"
												required
											/>
										</div>
										<div className="form-group">
											<Field
												type="test"
												className="form-control"
												placeholder="Direccion de entregas"
												name="direccionEntrega"
												required
											/>
										</div>
										<div className="form-group">
											<Field
												type="password"
												className="form-control"
												placeholder="Numero de tarjeta"
												name="noTarjeta"
												required
											/>
										</div>
										<div className="form-group">
											<Field
												type="password"
												className="form-control"
												placeholder="Contraseña"
												name="password"
												required
											/>
										</div>

										<div className="text-center">{boton}</div>
									</Form>
								)}
							</Formik>

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
