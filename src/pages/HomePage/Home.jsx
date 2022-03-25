import React from "react";
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="hero-area">
        <div className="hero-img">
          <img
            className="rsp-img"
            src="https://html.design/demo/famms/images/slider-bg.jpg"
          />
        </div>
        <div className="hero-text">
          <span className="hero-detail">
            <p>Sale 20% Off</p>
            On Everything
          </span>
          <br />
          <a href="#category">
            <button className="btn-text btn-primary btn-bg-color">
              {" "}
              Shop Now{" "}
            </button>
          </a>
        </div>
      </div>
      <div className="section">
        <div className="category-heading">
          <h1>Product Categories</h1>
        </div>
        <div id="category" className="category">
          <a href="pages/listing.html">
            <div className="card card-with-text">
              <img
                className="card-img grayed-img"
                src="https://m.media-amazon.com/images/I/31YrYpL623L.jpg"
              />
              <span className="overlay-text">Men</span>
            </div>
          </a>
          <a href="pages/listing.html">
            <div className="card card-with-text">
              <img
                className="card-img grayed-img"
                src="https://m.media-amazon.com/images/I/71Ji2hUMr7L._UY879_.jpg"
              />
              <span className="overlay-text">Women</span>
            </div>
          </a>
          <a href="pages/listing.html">
            <div className="card card-with-text">
              <img
                className="card-img grayed-img"
                src="https://m.media-amazon.com/images/I/61BshHYPOHL._AC_UL320_.jpg"
              />
              <span className="overlay-text">Kids</span>
            </div>
          </a>
          <a href="pages/listing.html">
            <div className="card card-with-text">
              <img
                className="card-img grayed-img"
                src="https://m.media-amazon.com/images/I/31YrYpL623L.jpg"
              />
              <span className="overlay-text">Men</span>
            </div>
          </a>
        </div>
      </div>

      <div className="section">
        <div className="category-heading">
          <h1>New Arrivals</h1>
        </div>
        <div id="category" className="category">
          <div className="card card-with-text">
            <img
              className="card-img"
              src="	https://m.media-amazon.com/images/I/31YrYpL623L.jpg"
            />
            <span className="overlay-text">Shirts</span>
          </div>
          <div className="card card-with-text">
            <img
              className="card-img"
              src="https://m.media-amazon.com/images/I/61KVLSg1GIL._AC_UL320_.jpg"
            />
            <span className="overlay-text">Shirts</span>
          </div>
          <div className="card card-with-text">
            <img
              className="card-img"
              src="https://m.media-amazon.com/images/I/61BshHYPOHL._AC_UL320_.jpg"
            />
            <span className="overlay-text">Hoodies</span>
          </div>
          <div className="card card-with-text">
            <img
              className="card-img"
              src="https://m.media-amazon.com/images/I/31YrYpL623L.jpg"
            />
            <span className="overlay-text">Shirts</span>
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
