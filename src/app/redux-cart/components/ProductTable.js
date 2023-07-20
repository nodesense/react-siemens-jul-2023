import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../state/actions';

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
                    </tr>
                  
                {
                     products.map (product => (
                        <tr key={product.id}>
                           <td>
                            
                              {product.name}
                          
                           
                           </td>
                           <td>{product.price}</td>
                           <td>{product.year}</td>
                             
                        </tr>
                    ))
                }
            </tbody>
            </table> 
        </div>
    )
}

export default ProductTable;