import { observer } from 'mobx-react-lite';
import { Container, Spinner } from 'react-bootstrap';

function ComponentLoader() {
	return (
		<Container>
			<Spinner animation="grow" />
		</Container>
	);
}

export default observer(ComponentLoader);
