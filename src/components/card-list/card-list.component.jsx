import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = ({ listings,  handleClickAddFilter}) => {
	return (
		<div className="card-list">
			{listings.map((listing) => (
				<Card
					key={listing.id}
					listing={listing}
					handleClickAddFilter={ handleClickAddFilter }
				/>
			))}
		</div>
	);
};
