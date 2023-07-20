import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

//const CartSummary = (props) => {
//    const {amount, totalItems} = props;

const CartSummary = ({amount, totalItems}) => {
    console.log("CartSummary render ", amount, totalItems)

    return (
        <div>

            {/* theme value shall be from default "blue" or from provider */}
            <ThemeContext.Consumer>
                { (theme) => (
                    <p style={ {color: theme} } > Theme is {theme}</p>
                ) }
            </ThemeContext.Consumer>
            
            <h2>Cart Summary</h2>
            <p>Amount  {amount}</p>
            <p>Total Items {totalItems} </p>
        
        
        </div>
    )
}


// if props are not passed from parent component
// may be due to developer bug or value is undefined from parent component
// use defaultProps only if parent doesn't pass data
// defaultProps is react keyword
CartSummary.defaultProps = {
    amount: 0,
    totalItems: 0
}

export default CartSummary;