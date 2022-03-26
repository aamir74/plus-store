import React from "react";
import { Link } from "react-router-dom";
import { product1 ,product2,product3} from "../../../assets";

const Products = () => {
  return (
    <div className="section">
      <div className="category-heading">
        <h1>New Arrivals</h1>
      </div>
      <div id="category" className="category">
        <Link to="/products">
          <div className="card card-with-text">
            <img className="card-img" src={product1} />
            <span className="overlay-text">Shirts</span>
          </div>
        </Link>
        <Link to="/products">
          <div className="card card-with-text">
            <img className="card-img" src={product3} />
            <span className="overlay-text">Gowns</span>
          </div>
        </Link>
        <Link to="/products">
          <div className="card card-with-text">
            <img className="card-img" src={product2} />
            <span className="overlay-text">Hoodies</span>
          </div>
        </Link>
        <div className="card card-with-text">
          <img className="card-img" src={product3} />
          <span className="overlay-text">Shirts</span>
        </div>
      </div>
    </div>
  );
};

export { Products };
