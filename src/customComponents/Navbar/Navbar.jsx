import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="p-nav">
    <a href="index.html">
      <div className="logo">
        <i className="fa fa-amazon" aria-hidden="true"></i>
        <h2>Azon</h2>
      </div>
    </a>
    <div className="nav-search">
      <input id="searchbar" className="textbox" type="email" placeholder="Search" />
    </div>
    <div className="nav-icons">
      <a href="./pages/cart.html">
        <span className="badge-icon">
          <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
          <span className="badge">2</span>
        </span>
      </a>
      <a href="./pages/wishlist.html">
        <span className="badge-icon">
          <i className="fa fa-heart fa-lg" aria-hidden="true"></i>
          <span className="badge">2</span>
        </span>
      </a>
      <a href="pages/login.html"><button className="btn-text btn-primary btn-bg-color">Login</button></a>
    </div>
  </nav>
  )
}

export default Navbar