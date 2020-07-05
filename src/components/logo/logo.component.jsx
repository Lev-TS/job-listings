import React from 'react';

import './logo.styles.css';

export const Logo = ({ listing }) => {
	const className = listing.featured
		? 'featured-logo-container'
		: 'logo-container';

	return (
		<div className={className}>
			<span
				className="logo"
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}${listing.logo})`,
				}}
			></span>
		</div>
	);
};
