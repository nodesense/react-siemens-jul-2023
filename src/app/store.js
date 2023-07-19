import {createStore, combineReducers, bindActionCreators, applyMiddleware} from 'redux';
import cartReducer from './redux-cart/state/cartReducer';
import loggerMiddleware from './middlewares/loggerMiddleware';
import counterSlice from './redux-cart/state/counterSlice';
import { configureStore } from '@reduxjs/toolkit'

 

// const rootReducer = combineReducers( {
//     // state: reducer func
//     cart: cartReducer,
//     counter: counterSlice
// })

// const store = createStore(rootReducer, 
//                             applyMiddleware(loggerMiddleware))


const store = configureStore({
    reducer: {
        cart: cartReducer,
        counter: counterSlice
    },

    middleware: [loggerMiddleware]
  })
  
//   // Infer the `RootState` and `AppDispatch` types from the store itself
//   export type RootState = ReturnType<typeof store.getState>
//   // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//   export type AppDispatch = typeof store.dispatch

export default store;