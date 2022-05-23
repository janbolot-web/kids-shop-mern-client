import React from "react";
import AdBlock from "../components/AdBlock";
import ProductList from "../components/ProductList";
import SimpleSlider from "../components/Carousel";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector(({ products }) => products.products.products);
  const productsSlider = products !== undefined && products.slice(0, 4);

  return (
    <div>
      <SimpleSlider productsSlider={productsSlider} />
      <AdBlock />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
