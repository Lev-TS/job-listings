import React from 'react';

import uniqid from 'uniqid';
import './filter-list.styles.css';

export const FilterList = ({ listing, handleAddFilter }) => {
	return (
		<div className="filter-container">
			<button className="filter" onClick={handleAddFilter}>
				{listing.role}
			</button>
			<button className="filter" onClick={handleAddFilter}>
				{listing.level}
			</button>
			<div className="language-filter-container">
				{listing.languages.map((lingo) => {
					return (
						<button
							key={uniqid('2')}
							className="filter"
							onClick={handleAddFilter}
						>
							{lingo}
						</button>
					);
				})}
			</div>
			<div className="tool-filter-container">
				{listing.tools.map((tool) => {
					return (
						<button
							key={uniqid.time()}
							className="filter"
							onClick={handleAddFilter}
						>
							{tool}
						</button>
					);
				})}
			</div>
		</div>
	);
};
