import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect } from 'react';
import { Container,Image } from 'react-bootstrap';
import { useStore } from '../stores/store';

function ListarProductos() {
	const { productoStore } = useStore();
	const { productoSeleccionado, editMode,productos } = productoStore;

	useEffect(
		() => {
			productoStore.cargarProductos();
		},
		[ productoStore ]
	);

    if (productoStore.cargandoInicial) {
        return <Fragment/>;
    }

	return (
        <>
        <header /*<!-- Header-->*/ className="bg-dark py-5">
				<Container className="px-4 px-lg-5 my-5">
					<div className="text-center text-white">
						<h1 className="display-4 fw-bolder">Abarroteria UMG</h1>
						<p className="lead fw-normal text-white-50 mb-0">Lo que necesitas, lo encuentras</p>
					</div>
				</Container>
			</header>

			<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
			{
				productos?.map((producto) =>(
					<div className="col mb-5" key={producto.sku_Id}>
					<div className="card h-100">
						
						<Image className="card-img-top" src={`./assets/svg/${producto.nombre_Producto}.svg`} alt="..." fluid/>
						
						<div className="card-body p-4">
							<div className="text-center">
								
								<h5 className="fw-bolder">{producto.nombre_Producto}</h5>
								
								Q.{producto.precio}
							</div>
						</div>
						
						<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
							<div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Ver detalles</a></div>
						</div>
					</div>
				</div>
					
				))}
			
			</div>
            </>
    );
}

export default observer(ListarProductos);