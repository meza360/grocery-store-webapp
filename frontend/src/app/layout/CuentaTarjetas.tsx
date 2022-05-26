import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Form, FormGroup, Image, FormLabel, FormControl } from 'react-bootstrap';
import CuentaOrdenes from './CuentaOrdenes';
import NavegacionCuenta from '../components/NavegacionCuenta';
import { Route, Routes } from 'react-router-dom';
import { useStore } from '../stores/store';

function CuentaTarjetas() {
	const { clienteStore } = useStore();
	const { user } = clienteStore;
	return (
		<section className="user-dashboard page-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<NavegacionCuenta />
						<div className="col-md-12">
							<h2>Detalles de tarjeta</h2>
							<div className="payment">
								<div className="">
									<span className="card-details">
										<Form className="checkout-form">
											<FormGroup className="form-group">
												<FormLabel htmlFor="card-number">Numeracion de tarjeta</FormLabel>
												<FormControl
													id="card-number"
													className="form-control"
													type="tel"
													placeholder={user.noTarjeta}
													disabled
												/>
											</FormGroup>
											<FormGroup className="form-group half-width padding-right">
												<FormLabel htmlFor="card-expiry">Fecha de expiracion</FormLabel>
												<FormControl
													id="card-expiry"
													className="form-control"
													type="tel"
													placeholder="MM / YY"
													disabled
												/>
											</FormGroup>
											<FormGroup className="form-group half-width padding-left">
												<FormLabel htmlFor="card-cvc">Codigo de seguridad</FormLabel>
												<FormControl
													id="card-cvc"
													className="form-control"
													type="tel"
													placeholder="CVC"
													disabled
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
									</span>
									<span className="card-image">
										<Image src={`../../assets/icons/tarjeta.svg`} />
									</span>
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
