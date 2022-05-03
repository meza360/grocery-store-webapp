import React from 'react';
import { Badge, Button, Container, Form, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

function NavigationBar() {
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
								<NavDropdown.Item>Todos los productos</NavDropdown.Item>
								<NavDropdown.Item>
									<hr className="dropdown-divider" />
								</NavDropdown.Item>
								<NavDropdown.Item>Los mas vendidos</NavDropdown.Item>
								<NavDropdown.Item>Nuevo ingreso</NavDropdown.Item>
							</NavDropdown>
						</ul>
						<Form className="d-flex">
							<Button className="btn" variant="outline-dark" type="submit">
								<i className="bi-cart-fill me-1" />
								<Image src="./assets/icons/cuenta.svg" height={'50'} />
								Mi Cuenta
							</Button>

							<Button className="btn" variant="outline-dark" type="submit">
								<i className="bi-cart-fill me-1" />
								<Image src="./assets/icons/bolso.svg" height={'50'} />
								Carrito de compras
								<Badge className="bg-dark text-white ms-1 rounded-pill">7</Badge>
							</Button>
							<Button className="btn" variant="outline-dark" type="submit">
								<Image src="./assets/icons/administrativo.svg" height={'50'} />
								Administrativos
							</Button>
						</Form>
					</Container>
				</Container>
			</Navbar>
		</Container>
	);
}
export default NavigationBar;
