import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div class="cart-content">
      <div class="category-heading">
        <h1>My Cart</h1>
      </div>
      <div class="cart-section">
        <div class="cart-products">
          <div class="cart-card">
            <div class="card card-with-text">
              <img
                class="card-img"
                src="https://cdn.shopify.com/s/files/1/0616/0544/5885/products/MansWearJacket_6_540x.jpg?v=1640194676"
              />
            </div>
            <div class="card-details">
              <h3 class="card-text-title">Men Premium Jacket</h3>
              <br />
              <p class="desc bold">30% Off Just in 2000 Rs</p>
              <p class="desc bold"></p>
              <br />
              <div class="quantity">
                <p class="desc">Quantity </p>
                <button class="btn-text btn-primary btn-bg-color">
                  <h4>+</h4>
                </button>
                <p class="h4">3</p>
                <button class="btn-text btn-primary btn-bg-color">
                  <h4>-</h4>
                </button>
              </div>
              <button class="btn-text btn-secondary btn-color">
                <h4>Remove from Cart</h4>
              </button>
              <br />
              <button class="btn-text btn-secondary btn-color">
                Move to wishlist
              </button>
            </div>
          </div>
          <div class="cart-card">
            <div class="card card-with-text">
              <img
                class="card-img"
                src="https://cdn.shopify.com/s/files/1/0616/0544/5885/products/MansWearJacket_6_540x.jpg?v=1640194676"
              />
            </div>
            <div class="card-details">
              <h3 class="card-text-title">Men Premium Jacket</h3>
              <br />
              <p class="desc bold">30% Off Just in 2000 Rs</p>
              <p class="desc bold"></p>
              <br />
              <div class="quantity">
                <p class="desc">Quantity </p>
                <button class="btn-text btn-primary btn-bg-color">
                  <h4>+</h4>
                </button>
                <p class="h4">3</p>
                <button class="btn-text btn-primary btn-bg-color">
                  <h4>-</h4>
                </button>
              </div>
              <button class="btn-text btn-secondary btn-color">
                <h4>Remove from Cart</h4>
              </button>
              <br />
              <button class="btn-text btn-secondary btn-color">
                Move to wishlist
              </button>
            </div>
          </div>
        </div>
        <div class="pricing">
          <p class="h5 bold">Price Details</p>
          <hr />
          <div class="price-details">
            <p class="desc ">Price(2 items)</p>
            <p class="desc">₹2999</p>
          </div>
          <div class="price-details">
            <p class="desc ">Discount</p>
            <p class="desc">- ₹1000</p>
          </div>
          <div class="price-details">
            <p class="desc ">Delivery Charges</p>
            <p class="desc">₹599</p>
          </div>
          <hr />
          <div class="price-details">
            <p class="desc bold">Total</p>
            <p class="desc bold">₹2598</p>
          </div>
          <hr />
          <br />
          <button class="btn-text btn-primary btn-bg-color">
            Place your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export { Cart };
