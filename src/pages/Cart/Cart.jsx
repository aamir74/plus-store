import React from "react";
import { useNavigate } from "react-router";
import { useNotifications } from "reapop";
import { useCart, useWishlist } from "../../hooks";
import { removeFromCart, updateCart } from "../../services";
import { handleAddToWishlist } from "../../utils";
import "./Cart.css";
import { Bill } from "./components/Bill";
import { CartCard } from "./components/CartCard";

const Cart = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;

  const removeItemHandler = async (id) => {
    const res = await removeFromCart(id);
    cartDispatch({ type: "REMOVE_FROM_CART", payload: res.data.cart });
    notify({
      title: <h3> Success :)</h3>,
      message: <h5>Product removed from the cart</h5>,
      status: "success",
      dismissible: true,
      dismissAfter: 5000,
      showDismissButton: true,
      position: "bottom-left",
    });
  };

  const updateItemHandler = async (id, actionType) => {
    const res = await updateCart(id, actionType);
    cartDispatch({ type: "UPDATE_CART", payload: res.data.cart });
  };

  const checkWishlist = async (id) => {
    if (wishlist) {
      return wishlist?.find((item) => {
        return item._id === id;
      });
    } else return false;
  };
  const handleWishlist = async (product) => {
    const productExist = await checkWishlist(product._id);
    if (productExist) navigate("/wishlist");
    else {
      await handleAddToWishlist(product, wishlistDispatch);
      navigate("/wishlist");
    }
  };

  const handleMoveToWishlist = async (product) => {
    await removeItemHandler(product._id);
    await handleWishlist(product);
    notify({
      title: <h3> Success :)</h3>,
      message: <h5>Product moved to wishlist</h5>,
      status: "success",
      dismissible: true,
      dismissAfter: 5000,
      showDismissButton: true,
      position: "bottom-left",
    });
  };
  console.log({ cartState });
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
                  key={item._id}
                  id={item._id}
                  product={item}
                  image={item.img}
                  name={item.name}
                  price={item.price}
                  quantity={item.qty}
                  removeFromCart={removeItemHandler}
                  updateCart={updateItemHandler}
                  moveToWishlist={handleMoveToWishlist}
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
