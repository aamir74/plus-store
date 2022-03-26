import { useEffect, useState } from "react";
import "./ProductsListing.css";
import axios from "axios";
import { product1 } from "../../assets";
import { Card } from "../../customComponents/Card/ProductsCard";
import { getProducts } from "../../services/index";
import { Filters } from "./components/Filters";
import { getProductsData } from "../../utils/index";
import { useFilter } from "../../hooks";
const ProductsListing = () => {
  const { state, dispatch } = useFilter();
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    getProductsData(setProducts, state);
  }, [state]);

  return (
    <div className="listing-content">
      <Filters />
      <div className="products">
        {products?.length
          ? products.map((item) => (
              <Card
                id={item._id}
                image={item.img}
                name={item.name}
                price={item.price}
              />
            ))
          : "No Products Found"}{" "}
      </div>
    </div>
  );
};

export { ProductsListing };
