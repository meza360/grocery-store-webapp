import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Image } from 'react-bootstrap';
import NavegacionCuenta from '../components/NavegacionCuenta';
import { Route, Routes } from 'react-router-dom';
import CuentaOrdenes from './CuentaOrdenes';
import CuentaTarjetas from './CuentaTarjetas';
import CuentaDetalles from './CuentaDetalles';
import CuentaDirecciones from './CuentaDirecciones';

function Cuenta() {
	return (
		<section className="user-dashboard page-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<NavegacionCuenta />
						<Routes>
							<Route path="/cuentaDetalles" element={<CuentaDetalles />} />
							<Route path="/cuentaOrdenes" element={<CuentaOrdenes />} />
							<Route path="/cuentaDirecciones" element={<CuentaDirecciones />} />
							<Route path="/cuentaTarjetas" element={<CuentaTarjetas />} />
						</Routes>
					</div>
				</div>
			</div>
		</section>
	);
}

export default observer(Cuenta);
