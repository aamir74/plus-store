import React from "react";
import { useCart } from "../../hooks";
import { removeFromCart, updateCart } from "../../services";
import "./Cart.css";
import { Bill } from "./components/Bill";
import { CartCard } from "./components/CartCard";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const removeItemHandler = async (id) => {
    const res = await removeFromCart(id);
    cartDispatch({ type: "REMOVE_FROM_CART", payload: res.data.cart });
  };
  const updateItemHandler = async (id,actionType) => {
    const res = await updateCart(id, actionType);
    cartDispatch({ type: "UPDATE_CART", payload: res.data.cart });
  };
  return (
    <div className="cart-content">
      <div className="category-heading">
        <h1>My Cart</h1>
      </div>
      <div className="cart-section">
        <div className="cart-products">
          {cart.length
            ? cart.map((item) => (
                <CartCard
                  image={item.img}
                  name={item.name}
                  price={item.price}
                  id={item._id}
                  quantity={item.qty}
                  removeFromCart={removeItemHandler}
                  updateCart={updateItemHandler}
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
