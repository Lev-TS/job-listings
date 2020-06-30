import React from 'react';

import './position.styles.css';

export const Position = ({ positionTitle }) => (
	<a
		className="position"
		href="https://github.com/Lev-TS"
		target="_blank"
		rel="noopener noreferrer"
	>
		{positionTitle}
	</a>
);
