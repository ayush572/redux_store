// this index.js is used to combine all the multiple reducers into a single reducer
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
})

export default reducers;