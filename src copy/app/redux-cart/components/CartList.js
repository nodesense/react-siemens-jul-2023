//redux-cart/components/CartList.js
import React from "react"; 
import CartItem from "../containers/CartItem";

// pass items from parent container component
// TODO: add containers/CartList.js
        // implement mapStateToProps {items: state.cart}
        // no need of mapDispatchToProps
        // connect(mapStateToProps, null) (CartList)

// Include CartList container in the redux-cart/components/Cart component
export default function CartList(props) { 
    let {items} = props;

    console.log("CartList function render")

   return (
       <div> 
       <h2>Cart List</h2>
       <table>
           <thead>
               <tr>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Qty</th>
                   <th> Total </th>
                   <th> Remove</th>
               </tr>
           </thead>
           <tbody>
           {/* comment */}
           
           {
               items.map (item => (
                   <CartItem item={item}
                             key={item.id}

                   />
               ))
           }


           </tbody>
       </table>
       </div>
    )
} 

CartList.defaultProps = {
    items: []
}
 