import React from 'react';

import './info-list.styles.css';

export const InfoList = ({ listing }) => {
	return (
		<ul className="info-list-container">
			<li>{ listing.postedAt }</li>
			<li className="bullet"></li>
			<li>{ listing.contract }</li>
			<li className="bullet"></li>
			<li>{ listing.location }</li>
		</ul>
	);
};
