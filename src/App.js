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
			filters: []
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
			return { filters, lastFilter: value };
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
		this.setState({ filters: [], remainingFilters: [] });
	};

	render() {
		let { listings, filters } = this.state;

		const filterListings = () => {
			filters.forEach(filter=>{
				listings.forEach(listing => {
					if (filter === listing.role) {
						listings = listings.filter(li => li.role === filter)
					} else if (filter === listing.level) {
						listings = listings.filter(li => li.level === filter)
					} else if (listing.languages.includes(filter)) {
						listings = listings.filter(li => li.languages.includes(filter))
					} else if (listing.tools.includes(filter)) {
						listings = listings.filter(li => li.tools.includes(filter))
					}
				})
			});
			return listings;
		}

		return (
			<div className="App">
				<Header />
				<SelectedFilterList
					filters={filters}
					handleRemoveFilter={this.handleRemoveFilter}
					handleClear={this.handleClear}
				/>
				<CardList
					listings={filterListings()}
					handleAddFilter={this.handleAddFilter}
				/>
				<Attribution />
			</div>
		);
	}
}

export default App;
