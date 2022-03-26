import React from "react";

const Bill = ({ cart }) => {
  const cartQuantity = cart.reduce((acc, curr) => acc + Number(curr.qty), 0);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + Number(curr.price * curr.qty),
    0
  );

  return (
    <div class="pricing">
      <p class="h5 bold">Price Details</p>
      <hr />
      <div class="price-details">
        <p class="desc ">Price({cartQuantity} items)</p>
        <p class="desc">₹{totalPrice}</p>
      </div>
      <div class="price-details">
        <p class="desc ">Discount</p>
        <p class="desc">- ₹0</p>
      </div>
      <div class="price-details">
        <p class="desc ">Delivery Charges</p>
        <p class="desc">₹100</p>
      </div>
      <hr />
      <div class="price-details">
        <p class="desc bold">Total</p>
        <p class="desc bold">₹{totalPrice + 100}</p>
      </div>
      <hr />
      <br />
      <button class="btn-text btn-primary btn-bg-color">
        Place your Order
      </button>
    </div>
  );
};

export { Bill };
