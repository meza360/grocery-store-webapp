import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Container,Image, NavItem } from 'react-bootstrap';
import { useStore } from '../stores/store';
import { Link} from 'react-router-dom';
import PageLoader from '../components/PageLoader';
import ComponentLoader from '../components/ComponentLoader';

function ListarProductos() {
	//const {target,setTarget} = useState('');
	const { productoStore } = useStore();
	const { listadoProductos } = productoStore;

	useEffect(
		() => {
			productoStore.cargarProductos();
		},
		[ productoStore ]
	);

    if (productoStore.cargandoInicial) {
        return <PageLoader />;
    }

	return (
        <>
        <header /*<!-- Header-->*/ className="bg-dark py-3">
				<Container className="px-2 px-lg-5 my-2">
					<div className="text-center text-white">
						<h1 className="display-2 fw-bolder">Abarroteria UMG</h1>
						<p className="lead fw-normal text-white-50 mb-0">Lo que necesitas, lo encuentras</p>
					</div>
				</Container>
			</header>

			<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
			{
				listadoProductos?.map((producto) =>(
					<div className="col mb-5" key={producto.skuId}>
					<div className="card h-100">
						
						<Image className="card-img-top" src={`./assets/svg/${producto.nombreProducto}.svg`} alt="..." fluid onLoad={()=>{return <ComponentLoader />}}/>
						
						<div className="card-body p-4">
							<div className="text-center">
								
								<h5 className="fw-bolder">{producto.nombreProducto}</h5>
								
								Q.{producto.precio}
							</div>
						</div>
						
						<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
							<div className="text-center"><NavItem as={Link} to={`/producto/${producto.skuId}`} className="btn btn-outline-dark mt-auto" >Ver detalles</NavItem></div>
						</div>
					</div>
				</div>
					
				))}
			
			</div>
            </>
    );
}

export default observer(ListarProductos);