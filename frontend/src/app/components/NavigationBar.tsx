import React from 'react';
import { observer } from 'mobx-react-lite';
import { Badge, Button, Container, Form, Navbar, NavItem, Nav, NavDropdown, Image } from 'react-bootstrap';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useStore } from '../stores/store';

function NavigationBar() {
	const { productoStore, clienteStore } = useStore();
	const { listadoCarrito } = productoStore;
	const { logSucceded, user } = clienteStore;

	let cuenta;
	if (logSucceded) {
		cuenta = (
			<NavItem className="btn" type="submit" as={NavLink} to="/cuenta">
				<Image src="./assets/icons/cuenta.svg" height={'50'} />
				{user.nombresCliente}
			</NavItem>
		);
	} else {
		cuenta = (
			<NavItem className="btn" type="submit" as={NavLink} to="/inicioSesion">
				<Image src="./assets/icons/cuenta.svg" height={'50'} />
				Mi Cuenta
			</NavItem>
		);
	}
	return (
		<Container>
			<Navbar className="navbar navbar-expand-lg navbar-light bg-light">
				<Container className="container px-4 px-lg-5">
					<Navbar.Brand className="">
						{' '}
						<Image src="./assets/icons/umg.svg" height={'50'} /> Abarroteria UMG
					</Navbar.Brand>
					<Button className="navbar-toggler" type="button" aria-label="Toggle navigation" variant="secondary">
						<span className="navbar-toggler-icon" />
					</Button>
					<Container className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
							<li className="nav-item">
								<Link to="/" className="nav-link active" aria-current="page">
									Pagina principal
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#!">
									Nuestros proveedores
								</a>
							</li>

							<NavDropdown
								as="ul"
								className="nav-link"
								id="navbarDropdown"
								title="Categorias"
								role="Button"
								aria-expanded="false"
							>
								<NavDropdown.Item as={NavLink} to="/">
									Todos los productos
								</NavDropdown.Item>
								<NavDropdown.Item>
									<hr className="dropdown-divider" />
								</NavDropdown.Item>
								<NavDropdown.Item>Los mas vendidos</NavDropdown.Item>
								<NavDropdown.Item>Nuevo ingreso</NavDropdown.Item>
							</NavDropdown>
						</ul>
						<Form className="d-flex">
							{cuenta}

							<NavItem className="btn" as={NavLink} to="/carritoCompras">
								<i className="bi-cart-fill me-1" />
								<Image src="./assets/icons/bolso.svg" height={'50'} />
								Carrito de compras
								<Badge className="bg-dark text-white ms-1 rounded-pill">{listadoCarrito.length}</Badge>
							</NavItem>
							<NavItem className="btn" as={NavLink} to="inicioEmpleados">
								<Image src="./assets/icons/administrativo.svg" height={'50'} />
								Administrativos
							</NavItem>
						</Form>
					</Container>
				</Container>
			</Navbar>
		</Container>
	);
}
export default observer(NavigationBar);
