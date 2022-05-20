import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Image, NavItem, FormControl } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useStore } from '../../app/stores/store';

function CarritoCompras() {
	const { productoStore } = useStore();
	const { listadoCarrito, quitarCarrito } = productoStore;

	return (
		<div className="page-wrapper">
			<div className="cart shopping">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-md-offset-2">
							<div className="block">
								<div className="product-list">
									<form method="post">
										<table className="table">
											<thead>
												<tr>
													<th className="">Producto</th>
													<th className="">Cantidad</th>
													<th className="">Precio</th>
													<th className="">Acciones</th>
												</tr>
											</thead>
											<tbody>
												{listadoCarrito.map((producto) => (
													<tr className="" key={producto.skuId}>
														<td className="">
															<div className="product-info">
																<Image
																	width="80"
																	src={`../../assets/svg/${producto.nombreProducto}.svg`}
																	alt="image"
																/>
																<NavItem as={Link} to={`/producto/${producto.skuId}`}>
																	{producto.nombreProducto}
																</NavItem>
															</div>
														</td>
														<td className="">
															<FormControl
																className="form-control text-center me-3"
																id="inputQuantity"
																type="number"
																readOnly
																disabled
																value="1"
															/>
														</td>
														<td className="">Q.{producto.precio}</td>
														<td className="">
															<Button
																className="product-remove"
																onClick={() => quitarCarrito(producto.skuId)}
															>
																Quitar del carrito
															</Button>
														</td>
													</tr>
												))}
											</tbody>
										</table>
										<NavItem
											as={NavLink}
											to="/carritoPago"
											className="btn btn-outline-dark pull-right"
										>
											Proceder a pago
										</NavItem>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default observer(CarritoCompras);
