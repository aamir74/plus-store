import React from "react";

const WishlistCard = ({ id, image, name, price, handleMoveToCart,product }) => {
  return (
    <div className="card card-with-text">
      <img className="card-img" src={image} />
      <div className="card-details">
        <h3 className="card-text-title">{name}</h3>
        <p className="desc bold">Only {price}/- Rs</p>
      </div>
      <div className="card-btn">
        <button
          className="btn-primary btn-bg-color left-margin bold"
          onClick={() => handleMoveToCart(product)}
        >
          Move to Cart
        </button>
        {/* <!-- <button className="btn-secondary btn-color">Secondary</button> --> */}
      </div>
    </div>
  );
};

export { WishlistCard };
