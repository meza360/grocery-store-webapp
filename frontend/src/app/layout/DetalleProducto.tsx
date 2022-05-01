import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import { Input } from 'semantic-ui-react';
import { Button, Container, Image } from 'react-bootstrap';

function DetalleProducto() {
	return (
		<Fragment>
			<Container className="">
				<Container className="container px-4 px-lg-5 my-5">
					<Container className="row gx-4 gx-lg-5 align-items-center">
						<Container className="col-md-6">
							<Image
								className="card-img-top mb-5 mb-md-0"
								src={'./assets/svg/Cafe premium.svg'}
								alt="..."
							/>
						</Container>
						<Container className="col-md-6">
							<Container className="small mb-1">SKU_ID: BST-498</Container>
							<h1 className="display-5 fw-bolder">Nombre_del_Producto</h1>
							<Container className="fs-5 mb-5">
								<span>Q40.00</span>
							</Container>
							<p className="lead">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem
								modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis
								delectus ipsam minima ea iste laborum vero?
							</p>
							<Container className="d-flex">
								<Input
									className="form-control text-center me-3"
									id="inputQuantity"
									type="number"
									value="1"
								/>
								<Button className="btn btn-outline-dark flex-shrink-0">
									<i className="bi-cart-fill me-1" />
									Agregar al carrito
								</Button>
							</Container>
						</Container>
					</Container>
				</Container>
			</Container>

			<Container className="py-5 bg-light">
				<Container className="container">
					<h2 className="fw-bolder mb-4">Productos relacionados</h2>
					<Container className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
						<Container className="col mb-5">
							<Container className="card">
								<Image className="card-img-top" src="./assets/svg/Leche entera.svg" alt="..." />

								<Container className="card-body p-4">
									<Container className="text-center">
										<h5 className="fw-bolder">Fancy Product</h5>
										$40.00 - $80.00
									</Container>
								</Container>

								<Container className="card-footer p-4 pt-0 border-top-0 bg-transparent">
									<Container className="text-center">
										<a className="btn btn-outline-dark mt-auto" href="#">
											View options
										</a>
									</Container>
								</Container>
							</Container>
						</Container>

						<Container className="col mb-5">
							<Container className="card">
								<Image className="card-img-top" src="./assets/svg/Leche entera.svg" alt="..." />

								<Container className="card-body p-4">
									<Container className="text-center">
										<h5 className="fw-bolder">Fancy Product</h5>
										$40.00 - $80.00
									</Container>
								</Container>

								<Container className="card-footer p-4 pt-0 border-top-0 bg-transparent">
									<Container className="text-center">
										<a className="btn btn-outline-dark mt-auto" href="#">
											View options
										</a>
									</Container>
								</Container>
							</Container>
						</Container>

						<Container className="col mb-5">
							<Container className="card h-100">
								<Image className="card-img-top" src="./assets/svg/Leche entera.svg" alt="..." />

								<Container className="card-body p-4">
									<Container className="text-center">
										<h5 className="fw-bolder">Sale Item</h5>
										<span className="text-muted text-decoration-line-through">$50.00</span>
										$25.00
									</Container>
								</Container>

								<Container className="card-footer p-4 pt-0 border-top-0 bg-transparent">
									<Container className="text-center">
										<a className="btn btn-outline-dark mt-auto" href="#">
											Add to cart
										</a>
									</Container>
								</Container>
							</Container>
						</Container>
						<Container className="col mb-5">
							<Container className="card h-100">
								<Image className="card-img-top" src="./assets/svg/Leche entera.svg" alt="..." />

								<Container className="card-body p-4">
									<Container className="text-center">
										<h5 className="fw-bolder">Popular Item</h5>
										<Container className="d-flex justify-content-center small text-warning mb-2">
											<Container className="bi-star-fill" />
											<Container className="bi-star-fill" />
											<Container className="bi-star-fill" />
											<Container className="bi-star-fill" />
											<Container className="bi-star-fill" />
										</Container>
										$40.00
									</Container>
								</Container>

								<Container className="card-footer p-4 pt-0 border-top-0 bg-transparent">
									<Container className="text-center">
										<a className="btn btn-outline-dark mt-auto" href="#">
											Add to cart
										</a>
									</Container>
								</Container>
							</Container>
						</Container>
					</Container>
				</Container>
			</Container>
		</Fragment>
	);
}

export default observer(DetalleProducto);
