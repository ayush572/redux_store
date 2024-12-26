// this index.js is used to combine all the multiple reducers into a single reducer
import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
})

export default reducers;