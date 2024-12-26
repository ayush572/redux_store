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
        default:
            return state;
    }
}               

export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case "SELECTED_PRODUCT":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}