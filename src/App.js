import React from 'react';
import { Header } from './components/header/header.component'
import { Attribution } from './components/attribution/attribution.component';
import { CardList } from './components/card-list/card-list.component';

import { data } from './data';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listings: data,
		};
	}

	render() {
		return (
			<div className="App">
				<Header />
				<CardList listings={this.state.listings} />
				<Attribution />
			</div>
		);
	}
}

export default App;
