import React from 'react';
import { observer } from 'mobx-react-lite';
import { Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap';
import NavegacionCuenta from '../components/NavegacionCuenta';
import { useStore } from '../stores/store';

function CuentaDirecciones() {
	const { clienteStore } = useStore();
	const { user } = clienteStore;
	return (
		<section className="user-dashboard page-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<NavegacionCuenta />
						<div className="container user-dashboard page-wrapper col-md-12">
							<Form>
								<FormGroup className="form-group">
									<FormLabel htmlFor="user_address">Direccion de entrega</FormLabel>
									<FormControl
										type="text"
										className="form-control"
										id="direccionEntrega"
										name="direccionEntrega"
										placeholder={user.direccionEntrega}
										disabled
										value={user.direccionEntrega}
									/>
								</FormGroup>

								{/* <FormGroup className="form-group">
									<FormLabel for="user_post_code">Codigo postal</FormLabel>
									<FormControl
										type="text"
										className="form-control"
										id="user_post_code"
										name="zipcode"
										value=""
										disabled
									/>
								</FormGroup>
								<Row>
									<Col>
										<FormGroup className="form-group">
											<FormLabel for="user_city">Municipio</FormLabel>
											<FormControl
												type="text"
												className="form-control"
												id="user_city"
												name="city"
												value=""
												disabled
											/>
										</FormGroup>
									</Col>
									<Col>
										<FormGroup className="form-group">
											<FormLabel for="user_country">Departamento</FormLabel>
											<FormControl
												type="text"
												className="form-control"
												id="user_country"
												placeholder=""
												disabled
											/>
										</FormGroup>
									</Col>
								</Row> */}
								<FormGroup className="form-group">
									<Button className="btn-outline-light" variant="info">
										Editar
									</Button>
									<Button className="" variant="dark" disabled>
										Guardar cambios
									</Button>
								</FormGroup>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default observer(CuentaDirecciones);
