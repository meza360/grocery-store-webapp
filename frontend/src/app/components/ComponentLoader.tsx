import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';
import { Container, Spinner } from 'react-bootstrap';

function ComponentLoader() {
	return (
		<Container>
			<Spinner animation="grow" />
		</Container>
	);
}

export default observer(ComponentLoader);
