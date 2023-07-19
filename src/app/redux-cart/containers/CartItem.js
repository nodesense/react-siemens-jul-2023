// redux-cart/containers/CartItem.js
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../state/actions';
import CartItem from '../components/CartItem';

const mapDispatchToProps = (dispatch, getState) => ({
    updateItem: bindActionCreators(actions.updateItem, dispatch),
    removeItem: bindActionCreators(actions.removeItem, dispatch)
})

export default connect (null, mapDispatchToProps) (CartItem)