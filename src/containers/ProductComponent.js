import react from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// the UI being used in the app is from Semantic UI framework

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products); //to get access to redux store
  //let {id, title, category} = products[0];
  //now to return the list of the products coming in
  const renderList = products.map((product) => {
    const { id, title, price, category, image } = product;
    return (
      <div classname="four column wide" key={id}>
        <Link to={`/product/${id}`}>
        <div classname="ui link cards">
          <div classname="card">
            <div classname="image">
              <img src={image} alt={title} height={200} width={200} />
            </div>
            <div classname="content">
              <div classname="header" style={{ size: "1rem" }}>
                {title}
              </div>
              <div classname="meta price">{price}</div> 
              <div classname="meta">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return <div display="flex">{renderList}</div>;
};

export default ProductComponent;
