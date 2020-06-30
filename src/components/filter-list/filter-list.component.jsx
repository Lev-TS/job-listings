import React from 'react';

import uniqid from 'uniqid';
import './filter-list.styles.css';

export const FilterList = ({ listing }) => {
	return (
		<div className="filter-container">
			<button className="filter">{ listing.role }</button>
			<button className="filter">{ listing.level }</button>
			<div className="language-filter-container">
				{listing.languages.map((lingo) => {
					return (
						<button key={ uniqid.time() } className="filter">
							{ lingo }
						</button>
					);
				})}
			</div>
			<div className="tool-filter-container">
				{listing.tools.map((tool) => {
					return (
						<button key={ uniqid.time() } className="filter">
							{ tool }
						</button>
					);
				})}
			</div>
		</div>
	);
};
