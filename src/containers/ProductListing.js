import react, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    let dispatch = useDispatch();
    let products = useSelector((state) => state.allProducts.products); //to get access to redux store
    // console.log(products);
    //Now usually, for displaying the products, we would have passed the products as props to the ProductComponent
    //But since we are using redux, we can directly access the products from the redux store anywhere in the whole application
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err: ", err);
        });
        // console.log("Response is:", response);
        dispatch(setProducts(response.data));
    }
    useEffect(()=>{fetchProducts()}, []);
    console.log("Products: ", products);
    
    return (
        <div className="ui grid container">
            <h1>
                <ProductComponent /> 
            </h1>
        </div>
    )
}

export default ProductListing;