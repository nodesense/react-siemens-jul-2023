// cart/CartItem.js
import React from 'react';

const CartItem = (props) => {
    console.log("CartItem render", props)
    //const item = props.item // es5 style
    const {item, updateItem, deleteItem} = props // destructruing es6 

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
                <button onClick={() => deleteItem(item.id)}>X</button>
            </td>
        </tr>
    )
}

export default CartItem;