import React from "react";
import { useNavigate } from "react-router";
import { useCart, useWishlist } from "../../hooks";
import { handleAddToCart, handleAddToWishlist } from "../../utils";

const Card = (props) => {
  const navigate = useNavigate();
  const { image, name, price, id, product } = props;
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cart } = cartState;
  const { wishlist } = wishlistState;

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

  return (
    <div className="card card-with-text" key={id}>
      <img className="card-img" src={image} />
      <span onClick={() => handleWishlist(product)}>
        <i
          className="fa fa-heart badge-btn top-right empty"
          aria-hidden="true"
        ></i>
      </span>
      <div className="card-details">
        <h3 className="card-text-title">{name}</h3>
        <p className="desc bold">Only {price}/- Rs</p>
      </div>
      <div className="card-btn">
        <button
          className="btn-primary btn-bg-color left-margin bold"
          onClick={() => handleCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { Card };
