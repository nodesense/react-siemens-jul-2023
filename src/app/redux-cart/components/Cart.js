//redux-cart/components/Cart.js
import React from "react"; 
import CartList from "../containers/CartList";

// View component/presentation/dump component/no knowledge of redux
// REACT Code, no store import, no redux , no dispatch, no susbcribe, no getState
// inputs: props
// prop 1 : totalItems 
// to add item to shopping cart, empty the cart.. to work with store
export default function Cart(props) { 
    // props {totalItems, yourName, addItem, emptyCart} are passed from container component
    // totalItems, yourName, from mapStateToProps,
            // addItem, emptyCart are from mapDispatchTo props
        
        console.log("Redux Cart props ", props)
        return (
            <div> 
            <h2>Cart </h2>
            <p> {props.yourName} </p>
            <p>Total Items {props.totalItems} </p>

            {/* props.addItem()  calls container addItem and dispatch item to store */}
            <button onClick={ ()=> props.addItem() }>
              Add
            </button>
            {/* props.emptyCart() container bindActioncreator with automatic dispatch */}
            <button onClick={ ()=>  props.emptyCart() }>
              Empty
            </button>

            <CartList />

  
            </div>
        )
} 
 