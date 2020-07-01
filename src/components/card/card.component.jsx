import React from 'react';
import { FilterList } from '../filter-list/filter-list.component';
import { Logo } from '../logo/logo.component';
import { ShortInfo } from '../short-info/short-info.component';

import './card.styles.css';

export const Card = ({ listing, handleClickAddFilter }) => (
	<div
		className="card-container"
		style={{
			borderLeft: listing.featured && '5px solid hsl(180, 29%, 50%)',
		}}
	>
		<Logo imagePath={listing.logo} />
		<ShortInfo listing={listing} />
		<FilterList
			listing={listing}
			handleClickAddFilter={handleClickAddFilter}
		/>
	</div>
);
