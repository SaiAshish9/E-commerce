import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

import './CollectionOverview.scss';

const CollectionOverview = ({ collections }) => (
	<div className="collection-overview">
		{console.log(collections)}
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections : selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);