import React from "react";

const CartCard = ({
  image,
  name,
  price,
  id,
  quantity,
  removeFromCart,
  updateCart,
  moveToWishlist,
  product,
}) => {
  return (
    <div className="cart-card">
      <div className="card card-with-text">
        <img className="card-img" src={image} />
      </div>
      <div className="card-details">
        <h3 className="card-text-title">{name}</h3>

        <p className="desc bold">Price ₹{price}</p>
        <br />

        <div className="quantity">
          <p className="h5 bold desc quantity-tag">Quantity </p>
          <button
            className="btn-text btn-primary btn-bg-color"
            onClick={() => {
              if (quantity < 2) removeFromCart(id);
              else updateCart(id, "decrement");
            }}
          >
            <h4>-</h4>
          </button>
          <p className="bold h4">{quantity}</p>
          <button
            className="btn-text btn-primary btn-bg-color"
            onClick={() => updateCart(id, "increment")}
          >
            <h4>+</h4>
          </button>
        </div>
        <br />
        <button
          className="btn-text btn-secondary btn-color"
          onClick={() => removeFromCart(id)}
        >
          <h4>Remove from Cart</h4>
        </button>
        <br />
        <button
          className="btn-text btn-secondary btn-color"
          onClick={() => moveToWishlist(product)}
        >
          Move to wishlist
        </button>
      </div>
    </div>
  );
};

export { CartCard };
