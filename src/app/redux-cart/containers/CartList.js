// redux-cart/containers/CartList.js
import {connect} from 'react-redux';
import CartList from '../components/CartList';

const mapStateToProps = (state) => ({items: state.cart})

export default connect(mapStateToProps, null) (CartList)