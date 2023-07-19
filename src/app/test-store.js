import { bindActionCreators } from "redux";
import { addItem, empty, removeItem, updateItem } from "./redux-cart/state/actions";
import store from "./store";
import * as actions from './redux-cart/state/actions';

console.log("Redux learning....")

// subscribe from store
// callback
// called after dispatch..after reducer called, after the state is updated
// we will not know what is changed
// susbcribe called until we ubsubscribe..
// to unsusbcribe, call unsubscribeFun1()
const unsubscribeFun1 = store.subscribe ( () => {
    console.log("STORE SUBSCRIBE CALLBACK ", store.getState())
})


// get the store state

// check combine reducer {cart: cartReducer}, cart is state
// {cart: []}, [] is from cartReducer's INITIAL_STATE
console.log("INITIAL STATE ", store.getState() )

// create add item action
// call action creator function, that returns action object
// {type: 'CART.ADD_ITEM_TO_CART', payload: {item: {id: 1, name: 'Product 1', qty: 1, price: 100} }}
const action = addItem( {id: 1, name: 'Product 1', qty: 1, price: 100} )
console.log("ACTION ", action)

// dispatch action, dispatch calls the combineReducers 
// that again calls all reducers (cartReducer) with current state and action
// finally updated states will be part of the store
console.log("DISPATCHING ACTION .. ", action)
store.dispatch (action )

// {cart: [{id: 1, name: 'Product 1', qty: 1, price: 100}]},
console.log("STATE AFTER ADD ITEM ", store.getState())

console.log("DISPATCH ACTION to set Qty 2")

store.dispatch(updateItem(1, 2))
console.log("STATE AFTER Update ITEM ", store.getState())

// TODO: add item product name: iphone, price: 45678, qty: 5, id: 2
store.dispatch(addItem( {id: 2, name: 'iphone', qty: 5, price: 45678} ))
// todo: delete the item by id 1
console.log("STATE AFTER add  ITEM ", store.getState())

// unsusbcribe from susbcription
console.log("UNSUBSCRIBE, no more SUBSCRIBE FUNC CALL")
// unsubscribeFun1()

// remove item, empty cart updates won't be there for susbcribe
store.dispatch(removeItem(1))
console.log("STATE AFTER remove ITEM ", store.getState())
// todo: empty the cart 

store.dispatch(empty())
console.log("STATE AFTER empty cart ", store.getState())


//bind action creator bind dispatch method with action creator method,
// and return the bound method/function..
// if we call bound method with action parameter, it automatically 
// create action using action creator and then dispatch automatically

console.log("BIND ACTION ACTION CALL AND DISPATCH..")
// here we don't call addItem, or dispatch, instead we pass functions reference to bind action creator
// by calling addItemBindActionFunc with parameter, it will automatically call addItem to create action
// and automatically dispatch the created action using dispatch function
const addItemBindActionFunc = bindActionCreators(addItem, store.dispatch)

addItemBindActionFunc({id: 111, name: 'Crazy product', price: 999, qty: 99})

console.log("STATE AFTER add bind action creator ", store.getState())

// we can bind more than 1 functions into bind action creators


// actions has all methods exported , can we accessed via actions.addItem, 
// actions.removeItem etc

const bindActions = bindActionCreators(actions, store.dispatch)

console.log("addItem ", actions.addItem)
console.log("bound addItem", bindActions.addItem)

// remove item from cart
// this calls actions.removeItem and dispatch action to remove id 111
bindActions.removeItem(111)
console.log("STATE AFTER remove  ", store.getState())
