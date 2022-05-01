import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';

function ComponentLoader() {
	return <Fragment />;
}

export default observer(ComponentLoader);
