import { singleProduct } from "../../data";
import "./product.scss";

// COMPONENTS
import Single from "../../components/single/Single";

const Product = () => {
  //Fetch data and send to single component

  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
