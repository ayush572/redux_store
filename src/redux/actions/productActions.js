import { ActionTypes } from "../constants/action-types";
const setProducts = (products) => {
        return {
            type: ActionTypes.SET_PRODUCTS, // to set the products
            payload: products,
        };
}

const selectedProduct = (product) => { // to display the product that got selected
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
}

export { setProducts, selectedProduct }; // exporting the functions to be used in the reducers