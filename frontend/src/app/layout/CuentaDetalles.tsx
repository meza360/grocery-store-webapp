import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Image } from 'react-bootstrap';
import NavegacionCuenta from '../components/NavegacionCuenta';
import { Route, Routes } from 'react-router-dom';
import CuentaOrdenes from './CuentaOrdenes';
import CuentaTarjetas from './CuentaTarjetas';
import { useStore } from '../stores/store';

function CuentaDetalles() {
	const { clienteStore } = useStore();
	const { user, logSucceded } = clienteStore;
	return (
		<section className="user-dashboard page-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<NavegacionCuenta />

						<div className="dashboard-wrapper dashboard-user-profile">
							<div className="media">
								<div className="pull-left text-center">
									<Image
										className="media-object user-img"
										src="./assets/icons/cuenta.svg"
										alt="Image"
									/>
								</div>
								<div className="media-body">
									<ul className="user-profile-list">
										<li>
											<span>Nombre completo:</span>
											{user.nombresCliente + ' ' + user.apellidosCliente}
										</li>
										<li>
											<span>Nit:</span>
											{user.nitCliente}
										</li>
										<li>
											<span>Correo electronico:</span>
											{user.correo}
										</li>
										<li>
											<span>Telefono:</span>
											{user.telefono}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default observer(CuentaDetalles);
