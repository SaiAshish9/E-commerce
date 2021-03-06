import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

import {
	CollectionPreviewContainer,
	TitleContainer,
	PreviewContainer
} from './CollectionPreview.styles';

const CollectionPreview = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<TitleContainer to={`/shop/${title.toLowerCase()}`}>
				{title.toUpperCase()}
			</TitleContainer>
			<PreviewContainer>
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;
