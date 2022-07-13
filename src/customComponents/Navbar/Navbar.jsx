import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useNotifications } from "reapop";
import { useAuth, useCart, useWishlist } from "../../hooks";
import CookieHelper from "../../utils/cookies/cookieHelper";

import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const { authState, authDispatch } = useAuth();
  const token = authState.auth;
  const handleLogout = () => {
    const cookieHelper = new CookieHelper();
    cookieHelper.setCookie("", null, -365);
    authDispatch({ type: "DELETE_USER_DATA" });
    cartDispatch({ type: "EMPTY_CART" });
    wishlistDispatch({ type: "EMPTY_WISHLIST" });
    notify({
      title: <h3> Success :)</h3>,
      message: <h5>Logged out successfully </h5>,
      status: "success",
      dismissible: true,
      dismissAfter: 5000,
      showDismissButton: true,
      position: "bottom-left",
    });
    navigate("/login");
  };

  return (
    <nav className="p-nav">
      <Link to="/">
        <div className="logo">
          <i className="fa fa-amazon" aria-hidden="true"></i>
          <h2>Azon</h2>
        </div>
      </Link>
      <div className="nav-search">
        <input
          id="searchbar"
          className="textbox"
          type="email"
          placeholder="Search"
        />
      </div>
      <div className="nav-icons">
        <Link to="/cart">
          <span className="badge-icon">
            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
            {cart.length ? <span className="badge">{cart.length}</span> : ""}
          </span>
        </Link>
        <Link to="/wishlist">
          <span className="badge-icon">
            <i className="fa fa-heart fa-lg" aria-hidden="true"></i>
            {wishlist.length ? (
              <span className="badge">{wishlist.length}</span>
            ) : (
              ""
            )}
          </span>
        </Link>
        {token ? (
          <button onClick={handleLogout} className="btn-text  btn-color">
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn-text btn-primary btn-bg-color">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
