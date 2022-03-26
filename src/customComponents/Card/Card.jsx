import React from "react";

const Card = (props) => {
  const { image, name, price } = props;
  return (
    <div className="card card-with-text">
      <img
        className="card-img"
        src="https://cdn.shopify.com/s/files/1/0616/0544/5885/products/MansWearJacket_6_540x.jpg?v=1640194676"
      />
      <a href="wishlist.html">
        <i className="fa fa-heart badge-btn top-right" aria-hidden="true"></i>
      </a>
      <div className="card-details">
        <h3 className="card-text-title">Men Premium Jacket</h3>
        <p className="desc bold">Only 2000/- Rs</p>
      </div>
      <div className="card-btn">
        <button className="btn-primary btn-bg-color left-margin bold">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { Card };
