import React from 'react';
import { Header } from './components/header/header.component';
import { Attribution } from './components/attribution/attribution.component';
import { CardList } from './components/card-list/card-list.component';
import { SelectedFilterList } from './components/selected-filter-list/selected-filter-list.component';

import { data } from './data';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listings: data,
			filters: [],
		};
	}

	handleAddFilter = (event) => {
		event.persist();
		this.setState((prevState) => {
			const value = event.target.textContent;
			let { filters } = prevState;
			if (!filters.includes(value)) {
				filters = filters.concat(value);
			}
			return { filters };
		});
	};

	handleRemoveFilter = (event) => {
		event.persist();
		this.setState((prevState) => {
			const filters = prevState.filters.filter(
				(element, index) => event.target.value !== element
			);
			return { filters };
		});
		this.setState({ test: event.target.value });
	};

	handleClear = (event) => {
		this.setState({ filters: [] });
	};

	render() {
		const { listings, filters } = this.state;

		const filteredListintings = listings.filter((listing) => {
			if (filters.length === 0) {
				return true;
			} else if (filters.includes(listing.role)) { 				
				return true
				// filters.some(
				// 	// (filter) =>
				// 	// 	filter === listing.role &&
				// 	// 	filter === listing.level &&
				// 	// 	listing.languages.includes(filter) &&
				// 	// 	listing.tools.includes(filter)
				// );
			} else {
				return false
			}
		});

		return (
			<div className="App">
				<Header />
				<SelectedFilterList
					filters={filters}
					handleRemoveFilter={this.handleRemoveFilter}
					handleClear={this.handleClear}
				/>
				<CardList
					listings={filteredListintings}
					handleAddFilter={this.handleAddFilter}
				/>
				<Attribution />
			</div>
		);
	}
}

export default App;
