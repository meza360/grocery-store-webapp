import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Image } from 'react-bootstrap';

function CuentaOrdenes() {
	return (
		<section className="user-dashboard page-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="list-inline dashboard-menu text-center">
							<li>
								<a href="dashboard.html">Detalles de cuenta</a>
							</li>
							<li>
								<a className="active" href="order.html">
									Ordenes
								</a>
							</li>
							<li>
								<a href="address.html">Direccion</a>
							</li>
							<li>
								<a href="profile-details.html">Metodos de pago</a>
							</li>
						</ul>
						<div className="dashboard-wrapper user-dashboard">
							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th>ID Orden</th>
											<th>Fecha</th>
											<th>Items</th>
											<th>Total</th>
											<th>Estado</th>
											<th />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>#451231</td>
											<td>Mar 25, 2016</td>
											<td>2</td>
											<td>$99.00</td>
											<td>
												<span className="label label-primary">Processing</span>
											</td>
											<td>
												<Button href="order.html" className="btn-default">
													Ver orden
												</Button>
											</td>
										</tr>
										<tr>
											<td>#451231</td>
											<td>Mar 25, 2016</td>
											<td>3</td>
											<td>$150.00</td>
											<td>
												<span className="label label-success">Completed</span>
											</td>
											<td>
												<Button href="order.html" className="btn-default">
													Ver orden
												</Button>
											</td>
										</tr>
										<tr>
											<td>#451231</td>
											<td>Mar 25, 2016</td>
											<td>3</td>
											<td>$150.00</td>
											<td>
												<span className="label label-danger">Canceled</span>
											</td>
											<td>
												<Button href="order.html" className="btn-default">
													Ver orden
												</Button>
											</td>
										</tr>
										<tr>
											<td>#451231</td>
											<td>Mar 25, 2016</td>
											<td>2</td>
											<td>$99.00</td>
											<td>
												<span className="label label-info">On Hold</span>
											</td>
											<td>
												<Button href="order.html" className="btn-default">
													Ver orden
												</Button>
											</td>
										</tr>
										<tr>
											<td>#451231</td>
											<td>Mar 25, 2016</td>
											<td>3</td>
											<td>$150.00</td>
											<td>
												<span className="label label-warning">Pending</span>
											</td>
											<td>
												<Button href="order.html" className="btn-default">
													Ver orden
												</Button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default observer(CuentaOrdenes);
