//redux-cart/components/Cart.js
import React from "react"; 

// View component/presentation/dump component/no knowledge of redux
// REACT Code, no store import, no redux , no dispatch, no susbcribe, no getState
// inputs: props
// prop 1 : totalItems 
// to add item to shopping cart, empty the cart.. to work with store
export default function Cart(props) { 
        return (
            <div> 
            <h2>Cart </h2>

            <button onClick={ ()=> {} }>
              Add
            </button>
 
            <button onClick={ ()=>  {} }>
              Empty
            </button>
  
            </div>
        )
} 
 