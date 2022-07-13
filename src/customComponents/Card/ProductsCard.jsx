import React from "react";
import { useNavigate } from "react-router";
import { useNotifications } from "reapop";
import { useAuth, useCart, useWishlist } from "../../hooks";
import { updateCart } from "../../services";
import { handleAddToCart, handleAddToWishlist } from "../../utils";

const Card = (props) => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const { image, name, price, id, product, rating } = props;
  const { authState } = useAuth();
  const token = authState?.auth;
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
    try {
      if (!token) {
        notify({
          title: <h3>Error Occured</h3>,
          message: <h5>Please Login to add products to cart</h5>,
          status: "error",
          dismissible: true,
          dismissAfter: 5000,
          showDismissButton: true,
          position: "bottom-left",
        });
        return navigate("/login");
      }
      const productExist = await checkCart(product._id);
      if (productExist) {
        const res = await updateCart(product._id, "increment", token);
        cartDispatch({ type: "UPDATE_CART", payload: res.data.cart });
      } else {
        await handleAddToCart({ product, cartDispatch, token });
      }
      notify({
        title: <h3> Success :)</h3>,
        message: <h5>Successfully added to the cart</h5>,
        status: "success",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    } catch (err) {
      notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Something went wrong! Refresh and try again</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
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
    try {
      if (!token) {
        notify({
          title: <h3>Error Occured</h3>,
          message: <h5>Please Login to add products to wishlist</h5>,
          status: "error",
          dismissible: true,
          dismissAfter: 5000,
          showDismissButton: true,
          position: "bottom-left",
        });
        return navigate("/login");
      }
      const productExist = await checkWishlist(product._id);
      if (!productExist)
        await handleAddToWishlist({ product, wishlistDispatch, token });
      notify({
        title: <h3> Success :)</h3>,
        message: <h5>Successfully added to the wishlist</h5>,
        status: "success",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    } catch (err) {
      notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Something went wrong! Refresh and try again</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <div className="card card-with-text" key={id}>
      <img className="card-img" src={image} />

      <span onClick={() => handleWishlist(product)}>
        <i
          className="fa fa-heart badge-btn top-right empty"
          aria-hidden="true"
          title="Add to Wishlist"
        ></i>
      </span>
      <div className="card-details margin-fix">
        <span className="rating">
          <h3 className="card-text-title">{name}</h3>{" "}
          <div className="rating-icon">
            <p className="bold desc">{rating}</p>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
        </span>
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
