import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from 'react-bootstrap';
import NavegacionCuenta from '../components/NavegacionCuenta';

function CuentaOrdenes() {
	return (
		
		<div className="dashboard-wrapper user-dashboard">
			<NavegacionCuenta />
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
	);
}

export default observer(CuentaOrdenes);
