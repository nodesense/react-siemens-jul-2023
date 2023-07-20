import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addItem, getProducts } from '../state/actions';

const ProductTable = (props) => {
    console.log("ProductTable render", props)

    const products = useSelector (state => state.product.products);
    const loading = useSelector (state => state.product.loading)
    const errorMessage = useSelector(state => state.product.errorMessage)
    
    const dispatch = useDispatch()

    useEffect( () => {
        console.log("ProductTable fetching data")

        const getProductsThunkFunc = getProducts()
        dispatch(getProductsThunkFunc)
         
        return () => {
            //component will unmount
            // cancel api call.. if api return data later
            console.log("product list unmount..")
        }
    }, [])

    if (errorMessage != '') {
        return (
            <div>
                <h2>Error while loading product .......{errorMessage}</h2>
            </div>
        )
    }

    if (loading) {
        return (
            <div>
                <h2>Loading products .......</h2>
            </div>
        )
    }

    return (
        <div>
            <h2>Product Table</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Year</th>
                        <th>+Cart</th>
                    </tr>
                  
                {
                     products.map (product => (
                        <tr key={product.id}>
                           <td>
                            
                              {product.name}
                          
                           
                           </td>
                           <td>{product.price}</td>
                           <td>{product.year}</td>
                           <td >
                                <button onClick={ () => dispatch(addItem({id: product.id, name: product.name, price:product.price, qty: 1}))}>
                                    +Cart
                                </button>
                            </td>  
                        </tr>
                    ))
                }
            </tbody>
            </table> 
        </div>
    )
}

export default ProductTable;