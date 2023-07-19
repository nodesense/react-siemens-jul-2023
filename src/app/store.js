import {createStore, combineReducers, bindActionCreators, applyMiddleware} from 'redux';
import cartReducer from './redux-cart/state/cartReducer';
import loggerMiddleware from './middlewares/loggerMiddleware';

const rootReducer = combineReducers( {
    // state: reducer func
    cart: cartReducer
})

const store = createStore(rootReducer, 
                            applyMiddleware(loggerMiddleware))

export default store;