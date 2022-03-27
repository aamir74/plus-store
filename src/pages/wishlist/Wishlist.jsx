import React from "react";
import { useNavigate } from "react-router";
import { useCart, useWishlist } from "../../hooks";
import { removeFromWishlist } from "../../services";
import { handleAddToCart } from "../../utils";
import { WishlistCard } from "./components/WishlistCard";

import "./Wishlist.css";

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const checkCart = async (id) => {
    if (cart) {
      return cart?.find((item) => {
        return item._id === id;
      });
    } else return false;
  };
  const handleCart = async (product) => {
    const productExist = await checkCart(product._id);
    if (productExist) navigate("/cart");
    else {
      await handleAddToCart(product, cartDispatch);
      navigate("/cart");
    }
  };

  const handleMoveToCart = async (product) => {
    const res = await removeFromWishlist(product._id);
    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: res.data.wishlist,
    });
    await handleCart(product);
  };

  return (
    <div className="wishlist-content">
      <div className="category-heading">
        <h1>My Wishlist</h1>
      </div>
      <div className="wishlist-products">
        {wishlist.length
          ? wishlist.map((item) => (
              <WishlistCard
                key={item._id}
                image={item.img}
                name={item.name}
                price={item.price}
                id={item._id}
                quantity={item.qty}
                product={item}
                handleMoveToCart={handleMoveToCart}
              />
            ))
          : "No items in wishlist"}
      </div>
    </div>
  );
};

export { Wishlist };
