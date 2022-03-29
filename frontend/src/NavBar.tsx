import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import './index.css';

export default function NavBar() {
	return (
		<Menu inverted fixed="top">
			<Container>
				<Menu.Item header>
					<img src="/assets/images/logo.png" alt="logo" />
					Reactivities
				</Menu.Item>
				<Menu.Item name="activities" />
				<Menu.Item>
					<Button positive content="Create activity" />
				</Menu.Item>
			</Container>
		</Menu>
	);
}
