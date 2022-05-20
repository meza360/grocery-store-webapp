import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Form, FormGroup, Image, FormLabel, FormControl } from 'react-bootstrap';
import CuentaOrdenes from './CuentaOrdenes';
import NavegacionCuenta from '../components/NavegacionCuenta';
import { Route, Routes } from 'react-router-dom';

function CuentaTarjetas() {
	return (
		<section className="user-dashboard page-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<NavegacionCuenta />
						<div className="col-md-6 text-center">
							<h2>Detalles de tarjeta</h2>
							<div className="checkout-product-details">
								<div className="payment">
									<div className="card-details">
										<Form className="checkout-form">
											<FormGroup className="form-group">
												<FormLabel for="card-number">Numeracion de tarjeta</FormLabel>
												<FormControl
													id="card-number"
													className="form-control"
													type="tel"
													placeholder="•••• •••• •••• ••••"
												/>
											</FormGroup>
											<FormGroup className="form-group half-width padding-right">
												<FormLabel for="card-expiry">Fecha de expiracion</FormLabel>
												<FormControl
													id="card-expiry"
													className="form-control"
													type="tel"
													placeholder="MM / YY"
												/>
											</FormGroup>
											<FormGroup className="form-group half-width padding-left">
												<FormLabel for="card-cvc">Codigo de seguridad</FormLabel>
												<FormControl
													id="card-cvc"
													className="form-control"
													type="tel"
													placeholder="CVC"
												/>
											</FormGroup>
											<FormGroup>
												<Button variant="info">Editar</Button>
												<Button variant="light" disabled>
													Guardar cambios
												</Button>
												<Button variant="danger">Eliminar tarjeta</Button>
											</FormGroup>
										</Form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default observer(CuentaTarjetas);
