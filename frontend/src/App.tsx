import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';

function App() {
	return (
		<div className="App">
			<NavBar />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hola compañeros de base de datos</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
