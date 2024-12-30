 // By the reducer, we are actually updating the state of the application (or the store)
 const initialState = {
    products: [
        //creating initial object in the state
        //{ id: 1, title: "Watch", category: "Accessories" },
    ],
 }
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            // this is the way of returning the state, ...state is used to make the copy of the state and 
            // then we are updating the products
            return { ...state, products: action.payload };
        case "FETCH_PRODUCTS":
            return { ...state, products: action.payload };
        default:
            return state;
    }
}               

export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case "SELECTED_PRODUCT":
            return { ...state, ...action.payload }; // copying the state and updating the payload by using spread operator
        case "REMOVE_SELECTED_PRODUCT":
            return {}; // we are returning empty object and not the previous state because we want to remove the selected product
        default:
            return state;
    }
}