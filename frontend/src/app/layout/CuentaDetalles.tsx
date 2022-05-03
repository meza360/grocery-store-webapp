import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Image } from 'react-bootstrap';

function CuentaDetalles() {
	return (
		<section className="user-dashboard page-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="list-inline dashboard-menu text-center">
							<li>
								<a href="dashboard.html">Dashboard</a>
							</li>
							<li>
								<a href="order.html">Orders</a>
							</li>
							<li>
								<a href="address.html">Address</a>
							</li>
							<li>
								<a className="active" href="profile-details.html">
									Profile Details
								</a>
							</li>
						</ul>
						<div className="dashboard-wrapper dashboard-user-profile">
							<div className="media">
								<div className="pull-left text-center">
									<Image
										className="media-object user-img"
										src="./assets/icons/cuenta.svg"
										alt="Image"
									/>
								</div>
								<div className="media-body">
									<ul className="user-profile-list">
										<li>
											<span>Nombre completo:</span>Johanna Doe
										</li>
										<li>
											<span>Departamento:</span>USA
										</li>
										<li>
											<span>Correo electronico:</span>mail@gmail.com
										</li>
										<li>
											<span>Telefono:</span>+880123123
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default observer(CuentaDetalles);
