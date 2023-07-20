import {connect} from 'react-redux';
import Cart from '../components/Cart';
import { bindActionCreators } from 'redux';
import * as actions from '../state/actions';
// should not import store here, as store is avaialble to container via react context..

// The redux cart component expect totalItems props
// mapStateToProps function
// get redux state/data from store and pass to redux cart component as props

// state = store.getState(), this method is called internally by react-redux library
const mapStateToProps = (state) => {
    console.log('Cart container mapStateToProps', state)

    // return any props from here that goes into react component as props
    return {
        // state.cart represent cart in combine reducer
        totalItems: state.cart.length,
        yourName: 'react programmer' // .. pass any props,
        
    }
}

// dispatch = store.dispatch
// getState = store.getState 
// returns an props of functions that will be used by react component
const mapDispatchToProps = (dispatch, getState) => {
    console.log("Cart container mapDispatchToProps")

    return {
        addItem: function () {
            // create item and dispatch item
            let id = Math.ceil(Math.random() * 1000000);
            let item = {
                id: id,
                name: 'Product ' + id,
                price: 100 + Math.ceil(Math.random() * 1000),
                qty: 1
            }

            const action = actions.addItem(item)
            dispatch(action);
        },
        // automatically dispatch action for empty cart
        emptyCart: bindActionCreators(actions.empty, dispatch)
    }
}

// We have Redux Cart, mapStateToProps, mapDispatchToProps are done indendtenly
//Create Redux Cart Container component that binds Redux Cart, mapStateToProps, mapDispatchToProps and store
// store will be avaialble to container component via React Context feature
// store is provided via react context..<Provider store={store} in index.js
// CartContainer is smart component, as it knows to work with Redux

// YOU SHOULD USE CONTAINER COMPONENT, NOT REACT COMPONENT
// SINCE REACT COMPONETN IS DUMB COMPONENT, LOCATED INSIDE CONTAINER COMPONENT
const CartContainer = connect (mapStateToProps, mapDispatchToProps) (Cart);  

export default CartContainer;