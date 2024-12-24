 const initialState = {
    products: [
        //creating initial object in the state
        { id: 1, title: "Watch", category: "Accessories" },
        

    ],
 }
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        default:
            return state;
    }
}                                                                                                                                      