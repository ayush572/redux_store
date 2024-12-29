import react, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// we need to dispath the removeSelectedProduct action whenever we are destroyin the component or let's say dispatching the listing page
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
//to get the parameter value from the url, we use the useParams hook from react-router-dom
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const {productId} = useParams();
    console.log("Product ID: ", productId);
    const product = useSelector((state) => state.product); // this is the key (product) that we are using it in the 
    // combineReducer that we had defined for getting the product
    const { image, title, price, category, description } = product;
    console.log("Product: ", product);
    const dispatch = useDispatch();
    const getData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("Err: ", err);
        });
        console.log("Response is:", response);
        dispatch(selectedProduct(response.data));
    }
    useEffect(() => {
        if (productId && productId!="") getData();
    return () => {
        dispatch(removeSelectedProduct()); // here we are dispatching the removeSelectedProduct action
        // means we are doing the cleanup when we move away from the page or RETURNING BACK TO THE LISTING PAGE
    } }, [productId]);
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (<div>...Loading</div>) : (
                <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                  <div className="ui vertical divider">AND</div>
                  <div className="middle aligned row">
                    <div className="column lp">
                      <img className="ui fluid image" src={image} />
                    </div>
                    <div className="column rp">
                      <h1>{title}</h1>
                      <h2>
                        <a className="ui teal tag label">${price}</a>
                      </h2>
                      <h3 className="ui brown block header">{category}</h3>
                      <p>{description}</p>
                      <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content">
                          <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add to Cart</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
        </div>
    )
}

export default ProductDetails;