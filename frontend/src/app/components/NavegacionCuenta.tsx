import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavegacionCuenta() {
	return (
		<div className="container">
			<ul className="list-inline dashboard-menu text-center">
				<li>
					<NavItem as={Link} to="/cuentaDetalles">
						Detalles de cuenta
					</NavItem>
				</li>
				<li>
					<NavItem as={Link} to="/cuentaOrdenes">
						Ordenes
					</NavItem>
				</li>
				<li>
					<NavItem as={Link} to="/cuentaDirecciones">
						Direccion
					</NavItem>
				</li>
				<li>
					<NavItem as={Link} to="/cuentaTarjetas">
						Metodos de pago
					</NavItem>
				</li>
			</ul>
		</div>
	);
}

export default observer(NavegacionCuenta);
