import React from 'react';

import './tag-list.styles.css';

export const TagList = ({ newTag, featuredTag }) => (
	<div className="tag-container">
		<p className="new-tag" style={{ display: !newTag && 'none' }}>
			new!
		</p>
		<p className="featured-tag" style={{ display: !featuredTag && 'none' }}>
			featured
		</p>
	</div>
);
