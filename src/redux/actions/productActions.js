import { ActionTypes } from "../constants/action-types";
export const setProducts = (products) => {
        return {
            type: ActionTypes.SET_PRODUCTS, // to set the products
            payload: products,
        };
}

export const selectedProduct = (product) => { // to display the product that got selected
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
}