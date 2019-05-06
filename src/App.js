import React, { Component } from 'react';
import Dice from './dice.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Dice face="five" />
			</div>
		);
	}
}

export default App;
