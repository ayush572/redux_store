import react, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
//to get the parameter value from the url, we use the useParams hook from react-router-dom
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const {productId} = useParams();
    console.log("Product ID: ", productId);
    const product = useSelector((state) => state.product); // this is the key that we are using it formt he combineReducer that we had defined
    console.log("Product: ", product);
    const dispatch = useDispatch();
    const getData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("Err: ", err);
        });
        console.log("Response is:", response);
        dispatch(selectedProduct(response.data));
    }
    useEffect(() => {getData() }, [productId]);
    return (
        <div>
            <h1>
                ProductDetails
            </h1>
        </div>
    )
}

export default ProductDetails;