import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Image } from 'react-bootstrap';

function CarritoCompras() {
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
													<th className="">Precio</th>
													<th className="">Acciones</th>
												</tr>
											</thead>
											<tbody>
												<tr className="">
													<td className="">
														<div className="product-info">
															<Image
																width="80"
																src="./assets/svg/Cafe premium.svg"
																alt="image"
															/>
															<a href="#!">Producto</a>
														</div>
													</td>
													<td className="">Q.200.00</td>
													<td className="">
														<Button className="product-remove" href="#!">
															Remove
														</Button>
													</td>
												</tr>
												<tr className="">
													<td className="">
														<div className="product-info">
															<Image
																width="80"
																src="./assets/svg/Cafe premium.svg"
																alt="image"
															/>
															<a href="#!">Producto</a>
														</div>
													</td>
													<td className="">Q.200.00</td>
													<td className="">
														<Button className="product-remove" href="#!">
															Remove
														</Button>
													</td>
												</tr>
												<tr className="">
													<td className="">
														<div className="product-info">
															<Image
																width="80"
																src="./assets/svg/Cafe premium.svg"
																alt="image"
															/>
															<a href="#!">Producto</a>
														</div>
													</td>
													<td className="">Q.200.00</td>
													<td className="">
														<Button className="product-remove" href="#!">
															Remove
														</Button>
													</td>
												</tr>
											</tbody>
										</table>
										<Button href="checkout.html" className="pull-right">
											Proceder a pago
										</Button>
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
