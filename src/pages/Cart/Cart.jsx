import React from "react";
import { useCart } from "../../hooks";
import { removeFromCart } from "../../services";
import "./Cart.css";
import { Bill } from "./components/Bill";
import { CartCard } from "./components/CartCard";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const removeItemHandler = async (id) => {
    console.log(id);
    const res = await removeFromCart(id);
    console.log(res);
    cartDispatch({ type: "REMOVE_FROM_CART", payload: res.data.cart });
  };
  return (
    <div class="cart-content">
      <div class="category-heading">
        <h1>My Cart</h1>
      </div>
      <div class="cart-section">
        <div class="cart-products">
          {cart.length
            ? cart.map((item) => (
                <CartCard
                  image={item.img}
                  name={item.name}
                  price={item.price}
                  id={item._id}
                  quantity={item.qty}
                  removeFromCart={removeItemHandler}
                />
              ))
            : "No items added to cart"}
        </div>
        {cart.length ? <Bill cart={cart} /> : ""}
      </div>
    </div>
  );
};

export { Cart };
