import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
	return (
		<div className='card-list'>
			{props.listings.map((listing) => (
				<Card key={listing.id} listing={listing} />
			))}
		</div>
	);
};

