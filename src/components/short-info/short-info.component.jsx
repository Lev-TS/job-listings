import React from 'react';
import { Company } from '../company/company.component';
import { TagList } from '../tag-list/tag-list.component';
import { Position } from '../position/position.component';
import { InfoList } from '../info-list/info-list.component';
import './short-info.styles.css';

export const ShortInfo = ({ listing }) => {
	return (
		<div className="short-info-container">
			<div>
				<Company companyName={listing.company} />
				<TagList newTag={listing.new} featuredTag={listing.featured} />
			</div>
			<Position positionTitle={listing.position} />
			<InfoList listing={listing} />
		</div>
	);
};
