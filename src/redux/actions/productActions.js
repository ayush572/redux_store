import { ActionTypes } from "../constants/action-types";
import storeApi from "../../apis/storeApi";

// now we have essentially created the action creators with the middleware
//fetchProducts is a function that returns another function
const fetchProducts = () => async (dispatch) => {
        const response = await storeApi.get("/products").catch((err) => {
            console.log("Err: ", err);
        });
        dispatch({type: ActionTypes.SET_PRODUCTS, payload: response.data});
    }

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

const removeSelectedProduct = () => { // to display the product that got selected
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
}

export { setProducts, selectedProduct, removeSelectedProduct, fetchProducts }; // exporting the functions to be used in the reducers