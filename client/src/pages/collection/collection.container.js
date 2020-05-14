import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { compose } from 'redux';

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector';
import withSpinner from '../../components/with-spiner/with-spiner.component';
import collectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const collectionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner)(collectionPage)

export default collectionPageContainer
