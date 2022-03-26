import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
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
            <span className="badge">2</span>
          </span>
        </Link>
        <Link to="/wishlist">
          <span className="badge-icon">
            <i className="fa fa-heart fa-lg" aria-hidden="true"></i>
            <span className="badge">2</span>
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
