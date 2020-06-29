import React from 'react';

import uniqid from 'uniqid';
import './filter-list.styles.css'

export const FilterList = (props) => {
	return (
		<div className="filter-list">
			<button className="filter">{props.listing.role}</button>
			<button className="filter">{props.listing.level}</button>
			<div className="language-list">
				{props.listing.languages.map((lingo) => {
					return <button key={uniqid.time()} className="filter">{lingo}</button>;
				})}
			</div>
			<div className="tool-list">
				{props.listing.tools.map((tool) => {
					return <button key={uniqid.time()} className="filter">{tool}</button>;
				})}
			</div>
		</div>
	);
};