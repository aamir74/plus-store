import React from "react";

const Card = (props) => {
  const { image, name, price, id } = props;
  return (
    <div className="card card-with-text" key={id}>
      <img className="card-img" src={image} />
      <a href="wishlist.html">
        <i className="fa fa-heart badge-btn top-right" aria-hidden="true"></i>
      </a>
      <div className="card-details">
        <h3 className="card-text-title">{name}</h3>
        <p className="desc bold">Only {price}/- Rs</p>
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
