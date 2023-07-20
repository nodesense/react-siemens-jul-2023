// redux-cart/components/CartItem.js
import React from 'react';

// item is passed via CartList as props
// implement container component /redux-cart/containers/CartItem.js
// you don't need mapStateToProps
// implement mapDispatchToProps for updateItem, deleteItem
// updateItem, deleteItem must be bindAction creator similar to emptyCart we done for Cart
// connect(null, mapDispatchToProps) (CartItem)
const CartItem = (props) => {
    console.log("CartItem render", props)
  
    const {item, updateItem, removeItem} = props // destructruing es6 

    // props are read only, immutable
    // SHOULD not modify props in child component
    // ERROR since we modify props attributes 
    //props.item = {}

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>{item.price * item.qty}</td>
            <td>
                <button onClick={() => updateItem(item.id, item.qty + 1)}>+1</button>
                <button onClick={() => updateItem(item.id, item.qty - 1)}>-1</button>
            </td>
            <td>
                <button onClick={() => removeItem(item.id)}>X</button>
            </td>
        </tr>
    )
}

export default CartItem;