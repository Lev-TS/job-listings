import React from 'react';
import { SelectedFilter } from '../selected-filter/selected-filter.component';

import './selected-filter-list.styles.css';
import uniqid from 'uniqid';

export const SelectedFilterList = ({
	filters,
	handleRemoveFilter,
	handleClear,
}) => {
	return (
		<div className="selected-filter-list">
			<div className="selected-filter-container">
				{filters.map((filter) => (
					<SelectedFilter
						key={uniqid('1')}
						filter={filter}
						handleRemoveFilter={handleRemoveFilter}
					/>
				))}
			</div>
			<button className="clear" onClick={handleClear}>
				Clear
			</button>
		</div>
	);
};
