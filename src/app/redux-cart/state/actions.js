import * as ActionTypes from "./action-types";

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

