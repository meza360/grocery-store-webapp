import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useStore } from '../stores/store';
import { generatePdf } from '../tools/generatePdf';

function CarritoConfirmacion() {
	const { productoStore } = useStore();
	const { carrito, totalPedido } = productoStore;
	return (
		<div>
			<div className="page-wrapper success-msg">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-md-offset-3">
							<div className="block text-center">
								<Image
									src="./assets/icons/completado.svg"
									className="tf-ion-android-checkmark-circle"
									width={'30%'}
								/>
								<h2 className="text-center">Pago confirmado</h2>
								<p>Gracias por su compra. Puede consultar los pedidos desde la pagina de su cuenta</p>
								<Button
									onClick={() => generatePdf(carrito, totalPedido)}
									className="btn btn-main mt-20"
								>
									Continuar comprando
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default observer(CarritoConfirmacion);
