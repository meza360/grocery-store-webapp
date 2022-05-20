import { observer } from 'mobx-react-lite';
import React from 'react';
import { Image, InputGroup, Form, FormGroup, FormLabel, FormControl, Button, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function CarritoPago() {
	return (
		<div className="page-wrapper">
			<div className="checkout shopping">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="block billing-details">
								<h4 className="widget-title">Detalles de facturacion</h4>
								<Form className="checkout-form">
									<div className="form-group">
										<FormLabel htmlFor="full_name">Nombre completo</FormLabel>
										<FormControl
											type="text"
											className="form-control"
											id="full_name"
											placeholder=""
										/>
									</div>
									<FormGroup className="form-group">
										<FormLabel htmlFor="user_address">Direccion de entrega</FormLabel>
										<FormControl
											type="text"
											className="form-control"
											id="user_address"
											placeholder=""
										/>
									</FormGroup>
									<div className="checkout-country-code clearfix">
										<FormGroup className="form-group">
											<FormLabel htmlFor="user_post_code">Codigo postal</FormLabel>
											<FormControl
												type="text"
												className="form-control"
												id="user_post_code"
												name="zipcode"
												value=""
											/>
										</FormGroup>
										<FormGroup className="form-group">
											<FormLabel htmlFor="user_city">Municipio</FormLabel>
											<FormControl
												type="text"
												className="form-control"
												id="user_city"
												name="city"
												value=""
											/>
										</FormGroup>
									</div>
									<FormGroup className="form-group">
										<FormLabel htmlFor="user_country">Departamento</FormLabel>
										<FormControl
											type="text"
											className="form-control"
											id="user_country"
											placeholder=""
										/>
									</FormGroup>
								</Form>
							</div>
							<div className="block">
								<h4 className="widget-title">Metodo de pago</h4>
								<p>Detalles de tarjeta (Pago seguro)</p>
								<div className="checkout-product-details">
									<div className="payment">
										<div className="card-details">
											<Form className="checkout-form">
												<FormGroup className="form-group">
													<FormLabel htmlFor="card-number">
														Numeracion de tarjeta <span className="required">*</span>
													</FormLabel>
													<FormControl
														id="card-number"
														className="form-control"
														type="tel"
														placeholder="•••• •••• •••• ••••"
													/>
												</FormGroup>
												<FormGroup className="form-group half-width padding-right">
													<FormLabel htmlFor="card-expiry">
														Fecha de expiracion (MM/YY) <span className="required">*</span>
													</FormLabel>
													<FormControl
														id="card-expiry"
														className="form-control"
														type="tel"
														placeholder="MM / YY"
													/>
												</FormGroup>
												<FormGroup className="form-group half-width padding-left">
													<FormLabel htmlFor="card-cvc">
														Codigo de seguridad <span className="required">*</span>
													</FormLabel>
													<FormControl
														id="card-cvc"
														className="form-control"
														type="tel"
														placeholder="CVC"
													/>
												</FormGroup>
												<NavItem
													as={NavLink}
													to="/carritoConfirmacion"
													className="btn btn-outline-dark mt-20"
												>
													Colocar orden
												</NavItem>
											</Form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="product-checkout-details">
								<div className="block">
									<h4 className="widget-title">Resumen de orden</h4>
									<div className="media product-card">
										<a className="pull-left" href="product-single.html">
											<Image
												className="media-object"
												src="./assets/svg/Cafe premium.svg"
												alt="Image"
											/>
										</a>
										<div className="media-body">
											<h4 className="media-heading">
												<a href="product-single.html">Nombre_de_Producto</a>
											</h4>
											<p className="price">1 x Q.249</p>
											<Button className="remove">Remove</Button>
										</div>
									</div>
									<hr />
									<ul className="summary-prices">
										<li>
											<span>Sub total:</span>
											<span className="price">Q.190</span>
										</li>
										<li>
											<span>Q. Envio:</span>
											<span>Gratis</span>
										</li>
									</ul>
									<div className="summary-total">
										<span>Total</span>
										<span>Q.250</span>
									</div>
									<div className="verified-icon">
										<Image src="./assets/images/verified.png" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default observer(CarritoPago);
