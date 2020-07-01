import React from 'react';

import uniqid from 'uniqid';
import './filter-list.styles.css';

export const FilterList = ({ listing, handleClickAddFilter }) => {
	return (
		<div className="filter-container">
			<button className="filter" onClick={handleClickAddFilter}>
				{listing.role}
			</button>
			<button className="filter" onClick={handleClickAddFilter}>
				{listing.level}
			</button>
			<div className="language-filter-container">
				{listing.languages.map((lingo) => {
					return (
						<button
							key={uniqid.time()}
							className="filter"
							onClick={handleClickAddFilter}
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
							onClick={handleClickAddFilter}
						>
							{tool}
						</button>
					);
				})}
			</div>
		</div>
	);
};
