import { Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Image, InputGroup, Form, FormGroup, FormLabel, FormControl, Button, NavItem } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import { useStore } from '../stores/store';

function CarritoPago() {
	const { productoStore, clienteStore } = useStore();
	const { listadoCarrito,totalCarrito,totalPedido,quitarCarrito } = productoStore;
	const { logSucceded, user } = clienteStore;

	const [ nombre, setNombre ] = useState('');
	const [ direccion, setDireccion ] = useState('');
	const [ tarjeta, setTarjeta ] = useState('');

	return (
		<div className="page-wrapper">
			<div className="checkout shopping">
				<div className="container">
					<div className="row">
						
									<Formik
									initialValues={{nombre: user.nombresCliente + '' + user.apellidosCliente, direccion: user.direccionEntrega, tarjeta: user.noTarjeta}}
									onSubmit={(values)=> productoStore.compra(values)}
									>
									{({handleSubmit,isSubmitting})=> (
										<>
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
															name='nombre'
															value={user.nombresCliente + '' + user.apellidosCliente}
															
														/>
													</div>
													<FormGroup className="form-group">
														<FormLabel htmlFor="user_address">Direccion de entrega</FormLabel>
														<FormControl
															type="text"
															className="form-control"
															id="user_address"
															placeholder=""
															name='direccion'
															value={user.direccionEntrega}
															
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
																disabled
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
																disabled
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
															disabled
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
														
															<FormGroup className="form-group">
																<FormLabel htmlFor="card-number">
																	Numeracion de tarjeta <span className="required">*</span>
																</FormLabel>
																<FormControl
																	id="card-number"
																	className="form-control"
																	type="tel"
																	placeholder="•••• •••• •••• ••••"
																	value={user.noTarjeta}
																	
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
																	disabled
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
																	disabled
																/>
															</FormGroup>
															<NavItem
																as={NavLink}
																to="/carritoConfirmacion"
																className="btn btn-outline-dark mt-20"
															>
																Colocar orden
															</NavItem>
														
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="product-checkout-details">
											<div className="block">
												<h4 className="widget-title">Resumen de orden</h4>
												{listadoCarrito.map((prod) => (
													<div key={prod.skuId} className="media product-card">
														<NavItem className="pull-left" as={Link} to={`/producto/${prod.skuId}`}>
															<Image
																className="media-object"
																src={`./assets/svg/${prod.nombreProducto}.svg`}
																alt="Image"
															/>
														</NavItem>
														<div className="media-body">
															<h4 className="media-heading">
																<NavItem as={Link} to={`/producto/${prod.skuId}`}>{prod.nombreProducto}</NavItem>
															</h4>
			
															<p className="price">1 x Q.{prod.precio}</p>
															<Button className="remove"
															onClick={() => quitarCarrito(prod.skuId)}>Quitar</Button>
														</div>
													</div>
												))}
			
												<hr />
												<ul className="summary-prices">
													<li>
														<span>Sub total:</span>
														<span className="price">Q.{totalPedido}</span>
													</li>
													<li>
														<span>Q. Envio:</span>
														<span>Gratis</span>
													</li>
												</ul>
												<div className="summary-total">
													<span>Total</span>
													<span>Q.{totalPedido}</span>
												</div>
												<div className="verified-icon">
													<Image src="./assets/images/verified.png" />
												</div>
											</div>
										</div>
									</div>
									</>
									)}
									</Formik>	
							
								
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default observer(CarritoPago);
