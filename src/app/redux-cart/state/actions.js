import * as ActionTypes from "./action-types";
import { loading, setError, setProduct } from "./productSlice";
import { fetchProducts } from "./services";

// action creators
// ES5 style
export function addItem(item) {
    // create and return action object
    console.log("***addItem called ", item)
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {item: item}
    }
}

// ES6 style code
// export const addItem = (item) => ({     
//     type: ActionTypes.ADD_ITEM_TO_CART,
//     payload: {
//         item
//     }
// })


export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
        id
    }
})

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM_IN_CART,
    payload: {
        id,
        qty: parseInt(qty)
    }
});

export const empty = () => ({
    type: ActionTypes.EMPTY_CART
})


// thunk function 
export const getProducts = () => {
    // thunk function
    return async (dispatch, getState) => {
        console.log("thunk func called to get products from backend..")
         
        try {
            // set the loading to be true
            dispatch(loading(true))
            dispatch(setError(''))
            const products = await fetchProducts()
            console.log("Products fetched using thunk ", products)
            // set the loading to be false
            dispatch(loading(false))

            // set the products to store
            dispatch(setProduct(products))
        } catch (error) {
            // handle error
            // set the error to store
            dispatch(setError(error))
             // set the loading to be false
             dispatch(loading(false))
        }
    }
}