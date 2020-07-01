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
			value: '',
			filters: ['HTML'],
		};
	}

	handleAddFilter = (event) => {
		this.setState({ value: event.target.textContent });
		this.setState((prevState) => {
			const filters = prevState.filters.concat(prevState.value)
			return {
				filters,
				value: '',
			}
		});
		// console.log(e.target.textContent)
	};

	handleClickAddFilter = (e) => {
		this.setState((prevState) => {
			const filters = prevState.filters.filter(
				(el, i) => e.target.value !== i
			);

			return {
				filters,
			};
		});
	};

	render() {
		const { listings, filters } = this.state;

		const filteredListintings = listings.filter((listing) =>
			filters.some(
				(filter) =>
					filter === listing.role ||
					filter === listing.level ||
					listing.languages.includes(filter) ||
					listing.tools.includes(filter)
			)
		);

		return (
			<div className="App">
				<SelectedFilterList />
				<Header />
				<CardList
					listings={filteredListintings}
					handleClickAddFilter={this.handleClickAddFilter}
					handleClickRemoveFilter={this.handleClickRemoveFilter}
				/>
				<Attribution />
			</div>
		);
	}
}

export default App;
