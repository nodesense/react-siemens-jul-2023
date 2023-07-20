import {createStore, combineReducers, bindActionCreators, applyMiddleware} from 'redux';
import cartReducer from './redux-cart/state/cartReducer';
import loggerMiddleware from './middlewares/loggerMiddleware';
import counterSlice from './redux-cart/state/counterSlice';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import productReducer from './redux-cart/state/productSlice';

 
const store = configureStore({
  reducer: {
      cart: cartReducer,  //  []
      counter: counterSlice,  // {value: 0}
      product: productReducer // {products: [], errorMessage: '', loading: false} 
  },

  middleware: [loggerMiddleware, thunk]
})
 
export default store;

// const rootReducer = combineReducers( {
//     // state: reducer func
//     cart: cartReducer,
//     counter: counterSlice
// })

// const store = createStore(rootReducer, 
//                             applyMiddleware(loggerMiddleware, thunk))

// 

// export default store;