import React from "react";
import { Link } from "react-router-dom";
import { product1, product2, product3 } from "../../../assets";

const Categories = () => {
  return (
    <div className="section">
      <div className="category-heading">
        <h1>Product Categories</h1>
      </div>
      <div id="category" className="category">
        <Link to="/products">
          <div className="card card-with-text">
            <img className="card-img grayed-img" src={product1} />
            <span className="overlay-text">Men</span>
          </div>
        </Link>
        <Link to="/products">
          <div className="card card-with-text">
            <img className="card-img grayed-img" src={product2} />
            <span className="overlay-text">Women</span>
          </div>
        </Link>
        <Link to="/products">
          <div className="card card-with-text">
            <img className="card-img grayed-img" src={product3} />
            <span className="overlay-text">Kids</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { Categories };
