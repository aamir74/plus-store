import React from "react";
import { Link } from "react-router-dom";
import { product1, product10, product13 } from "../../../assets";
import { useFilter } from "../../../hooks";
import { handleFilter } from "../../../utils";

const Categories = () => {
  const { state, dispatch } = useFilter();
  const handleChange = (e) => {
    handleFilter({ target: { name: "clear" } }, dispatch);
    handleFilter(e, dispatch);
  };
  return (
    <div className="section">
      <div className="category-heading">
        <h1>Product Categories</h1>
      </div>
      <div id="category" className="category">
        <Link to="/products">
          <div
            onClick={() =>
              handleChange({
                target: {
                  name: "category",
                  value: "Men",
                },
              })
            }
            className="card card-with-text"
          >
            <img className="card-img grayed-img" src={product1} />
            <span className="overlay-text">Men</span>
          </div>
        </Link>
        <Link to="/products">
          <div
            onClick={() =>
              handleChange({
                target: {
                  name: "category",
                  value: "Women",
                },
              })
            }
            className="card card-with-text"
          >
            <img className="card-img grayed-img" src={product10} />
            <span className="overlay-text">Women</span>
          </div>
        </Link>
        <Link to="/products">
          <div
            onClick={() =>
              handleChange({
                target: {
                  name: "category",
                  value: "Kids",
                },
              })
            }
            className="card card-with-text"
          >
            <img className="card-img grayed-img" src={product13} />
            <span className="overlay-text">Kids</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { Categories };
