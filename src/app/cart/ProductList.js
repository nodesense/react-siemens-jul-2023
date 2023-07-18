import React, {useEffect, useState} from 'react';

import axios from 'axios';

const ProductList = (props) => {
    console.log("ProductList render", props)

    const [products, setProducts] = useState([])

    useEffect( () => {
        console.log("fetching data")
        // http://localhost:7070/api/products

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        axios.get('http://localhost:7070/delayed/api/products', {
            cancelToken: source.token
          } )
             .then(response => {
                console.log("Data ", response.data)
                setProducts(response.data)
             })
             .catch (error => {
                console.log ("Axios error ", error)
             })

        return () => {
            //component will unmount
            // cancel api call.. if api return data later
            console.log("product list unmount..")
            
            source.cancel('Operation canceled by the user.');
        }
    }, [])

    return (
        <div>
            <h2>Products</h2>
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

export default ProductList;