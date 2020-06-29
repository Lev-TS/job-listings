import React from 'react';
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
				<div className="header">
					<span id="image">
						<span className="inner"></span>
					</span>
				</div>

				<CardList listings={this.state.listings} />
				<Attribution />
			</div>
		);
	}
}

export default App;
