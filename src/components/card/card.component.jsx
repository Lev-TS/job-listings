import React from 'react';
import { FilterList } from '../filter-list/filter-list.component'

import './card.styles.css';

export const Card = (props) => (
	<div className="card-container">
		<div className="logo">
			<span 
				className="image"
				style={{ backgroundImage: `url("${props.listing.logo}")` }}
			></span>
		</div>
		<p className="company">{props.listing.company}</p>
		<a className="position" href="https://github.com/Lev-TS">
			{props.listing.position}
		</a>
		<ul>
			<li>{props.listing.postedAt}</li>
			<li>{props.listing.contract}</li>
			<li>{props.listing.location}</li>
		</ul>
		<FilterList listing={props.listing}/>
	</div>
);

