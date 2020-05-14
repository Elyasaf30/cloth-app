import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import withSpinner from '../with-spiner/with-spiner.component';
import collectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const collectionOverviewContainer = compose(
    connect(mapStateToProps), withSpinner)(collectionOverview)

export default collectionOverviewContainer
