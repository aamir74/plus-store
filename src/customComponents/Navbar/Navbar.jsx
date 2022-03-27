import React from "react";
import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../../hooks";

import "./Navbar.css";
const Navbar = () => {
  const { wishlistState } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartState } = useCart();
  const { cart } = cartState;
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
            {cart.length && <span className="badge">{cart.length}</span>}
          </span>
        </Link>
        <Link to="/wishlist">
          <span className="badge-icon">
            <i className="fa fa-heart fa-lg" aria-hidden="true"></i>
            {wishlist.length && (
              <span className="badge">{wishlist.length}</span>
            )}
          </span>
        </Link>
        <Link to="/login">
          <button className="btn-text btn-primary btn-bg-color">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
