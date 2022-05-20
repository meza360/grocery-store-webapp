import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';
import { Container, Image, Spinner } from 'react-bootstrap';
import ComponentLoader from '../../app/components/ComponentLoader';

function PageLoader() {
	return (
		<Container className="text-center col-md-12">
			<h1>Cargando pagina...</h1>
			<Image
				src={`../../assets/icons/umg.svg`}
				onLoadStart={() => {
					return <ComponentLoader />;
				}}
			/>
			<Container className="">
				<Spinner animation="border" role="status" />
				{''}
			</Container>
		</Container>
	);
}

export default observer(PageLoader);
