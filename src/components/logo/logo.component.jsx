import React from 'react';

import './logo.styles.css';

export const Logo = ({ imagePath }) => {
	return (
		<div className="logo-container">
			<span
				className="logo"
				style={{ backgroundImage: `url("data:image/svg+xml,${imagePath}")` }}
			></span>
		</div>
	);
};
