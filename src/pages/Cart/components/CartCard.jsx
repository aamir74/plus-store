import React from "react";

const CartCard = ({ image, name, price, id, quantity, removeFromCart }) => {
  return (
    <div class="cart-card">
      <div class="card card-with-text">
        <img class="card-img" src={image} />
      </div>
      <div class="card-details">
        <h3 class="card-text-title">{name}</h3>

        <p class="desc bold">Price ₹{price}</p>
        <br />

        <div class="quantity">
          <p class="desc">Quantity </p>
          <button class="btn-text btn-primary btn-bg-color">
            <h4>+</h4>
          </button>
          <p class="h4">{quantity}</p>
          <button class="btn-text btn-primary btn-bg-color">
            <h4>-</h4>
          </button>
        </div>
        <br />
        <button
          class="btn-text btn-secondary btn-color"
          onClick={() => removeFromCart(id)}
        >
          <h4>Remove from Cart</h4>
        </button>
        <br />
        <button class="btn-text btn-secondary btn-color">
          Move to wishlist
        </button>
      </div>
    </div>
  );
};

export { CartCard };
