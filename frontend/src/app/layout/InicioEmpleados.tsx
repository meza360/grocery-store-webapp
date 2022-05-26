import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { Form, FormGroup, FormControl, Image, Button } from 'react-bootstrap';

import { useStore } from '../../app/stores/store';
import { Empleado } from '../models/Empleado';

function InicioEmpleados() {
	const { empleadoStore } = useStore();
	const { empleado, setPassword, setIdUsuario } = empleadoStore;

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		console.log();
	}

	function handleSubmit() {
		console.log(empleado.idUsuario);
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
							<h2 className="text-center">Inicio de administradores</h2>

							<Form className="text-left clearfix">
								<FormGroup className="form-group">
									<FormControl type="text" placeholder="Id usuario" onChange={handleChange} />
								</FormGroup>
								<FormGroup className="form-group">
									<FormControl type="password" placeholder="Contraseña" onChange={handleChange} />
								</FormGroup>
								<div className="text-center">
									<Button onClick={handleSubmit} className="btn btn-outline-dark text-center">
										Iniciar sesion
									</Button>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default observer(InicioEmpleados);
