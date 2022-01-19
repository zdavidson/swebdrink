import "./ProductIndex.scss";
import ContactMe from "../homepage/ContactMe";
import FirstItem from "./Audiophile";
import SecondItem from "./SecondItem";
import ThirdItem from "./ThirdItem";

const ProductIndex = () => {
  return (
    <div id="product-index">
      <FirstItem />
      <SecondItem />
      <ThirdItem />
      <ContactMe />
    </div>
  );
};

export default ProductIndex;
