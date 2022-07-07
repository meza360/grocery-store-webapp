import { observer } from 'mobx-react-lite';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStore } from '../stores/store';

function NavegacionCuenta() {
	const { clienteStore } = useStore();
	const { logout } = clienteStore;

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
				<li>
					<NavItem as={Link} to="/" onClick={() => logout()}>
						Cerrar sesion
					</NavItem>
				</li>
			</ul>
		</div>
	);
}

export default observer(NavegacionCuenta);
