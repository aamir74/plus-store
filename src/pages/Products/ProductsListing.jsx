import React from "react";
import "./ProductsListing.css"

const ProductsListing = () => {
  return (
    <div className="listing-content">
      <aside className="filters">
        <div className="filters-head">
          <p className="h5 bold">Filters</p>
          <p>Clear</p>
        </div>
        <hr />
        <div className="filter">
          <p className="h6 bold">Price</p>
          <input type="range" min="1" max="1000" value="50" />
        </div>
        <div className="filter">
          <p className="h6 bold">Category</p>
          <input type="checkbox" id="c1" name="category1" value="Men" />
          <label htmlFor="c1"> Men</label>
          <br />
          <input type="checkbox" id="c2" name="category2" value="Women" />
          <label htmlFor="c2">Women</label>
          <br />
          <input type="checkbox" id="c3" name="category3" value="Kids" />
          <label htmlFor="c3">Kids</label>
          <br />
        </div>
        <div className="filter">
          <p className="h6 bold">Rating</p>
          <input type="radio" id="r1" name="rating" value="4star" />
          <label htmlFor="r1">4 Stars & above</label>
          <br />
          <input type="radio" id="r2" name="rating" value="3star" />
          <label htmlFor="r2">3 Stars & above</label>
          <br />
          <input type="radio" id="r3" name="rating" value="2star" />
          <label htmlFor="r3">2 Stars & above</label>
          <br />
          <input type="radio" id="r4" name="rating" value="1star" />
          <label htmlFor="r4">1 Stars & above</label>
          <br />
        </div>
        <div className="filter">
          <p className="h6 bold">Sort By</p>
          <input type="radio" id="s1" name="pricing" value="des" />
          <label htmlFor="s1">Price - Low to High</label>
          <br />
          <input type="radio" id="s2" name="pricing" value="asc" />
          <label htmlFor="s2">Price - High to Low</label>
          <br />
        </div>
      </aside>
      <div className="products">
        <div className="card card-with-text">
          <img
            className="card-img"
            src="https://cdn.shopify.com/s/files/1/0616/0544/5885/products/MansWearJacket_6_540x.jpg?v=1640194676"
          />
          <a href="wishlist.html">
            <i className="fa fa-heart badge-btn top-right" aria-hidden="true"></i>
          </a>
          <div className="card-details">
            <h3 className="card-text-title">Men Premium Jacket</h3>
            <p className="desc bold">Only 2000/- Rs</p>
          </div>
          <div className="card-btn">
            <button className="btn-primary btn-bg-color left-margin bold">
              Add to Cart
            </button>
            {/* <!-- <button className="btn-secondary btn-color">Secondary</button> --> */}
          </div>
        </div>
        <div className="card card-with-text">
          <img
            className="card-img"
            src="https://cdn.shopify.com/s/files/1/0616/0544/5885/products/MansWearJacket_6_540x.jpg?v=1640194676"
          />
          <a href="wishlist.html">
            <i className="fa fa-heart badge-btn top-right" aria-hidden="true"></i>
          </a>
          <div className="card-details">
            <h3 className="card-text-title">Men Premium Jacket</h3>
            <p className="desc bold">Only 2000/- Rs</p>
          </div>
          <div className="card-btn">
            <button className="btn-primary btn-bg-color left-margin bold">
              Add to Cart
            </button>
            {/* <!-- <button className="btn-secondary btn-color">Secondary</button> --> */}
          </div>
        </div>
        <div className="card card-with-text">
          <img
            className="card-img"
            src="https://cdn.shopify.com/s/files/1/0616/0544/5885/products/MansWearJacket_6_540x.jpg?v=1640194676"
          />
          <a href="wishlist.html">
            <i className="fa fa-heart badge-btn top-right" aria-hidden="true"></i>
          </a>
          <div className="card-details">
            <h3 className="card-text-title">Men Premium Jacket</h3>
            <p className="desc bold">Only 2000/- Rs</p>
          </div>
          <div className="card-btn">
            <button className="btn-primary btn-bg-color left-margin bold">
              Add to Cart
            </button>
            {/* <!-- <button className="btn-secondary btn-color">Secondary</button> --> */}
          </div>
        </div>
        <div className="card card-with-text">
          <img
            className="card-img"
            src="https://cdn.shopify.com/s/files/1/0616/0544/5885/products/MansWearJacket_6_540x.jpg?v=1640194676"
          />
          <a href="wishlist.html">
            <i className="fa fa-heart badge-btn top-right" aria-hidden="true"></i>
          </a>
          <div className="card-details">
            <h3 className="card-text-title">Men Premium Jacket</h3>
            <p className="desc bold">Only 2000/- Rs</p>
          </div>
          <div className="card-btn">
            <button className="btn-primary btn-bg-color left-margin bold">
              Add to Cart
            </button>
            {/* <!-- <button className="btn-secondary btn-color">Secondary</button> --> */}
          </div>
        </div>
        <div className="card card-with-text">
          <img
            className="card-img"
            src="https://cdn.shopify.com/s/files/1/0616/0544/5885/products/MansWearJacket_6_540x.jpg?v=1640194676"
          />
          <a href="wishlist.html">
            <i className="fa fa-heart badge-btn top-right" aria-hidden="true"></i>
          </a>
          <div className="card-details">
            <h3 className="card-text-title">Men Premium Jacket</h3>
            <p className="desc bold">Only 2000/- Rs</p>
          </div>
          <div className="card-btn">
            <button className="btn-primary btn-bg-color left-margin bold">
              Add to Cart
            </button>
            {/* <!-- <button className="btn-secondary btn-color">Secondary</button> --> */}
          </div>
        </div>
        <div className="card card-with-text">
          <img
            className="card-img"
            src="https://cdn.shopify.com/s/files/1/0616/0544/5885/products/MansWearJacket_6_540x.jpg?v=1640194676"
          />
          <a href="wishlist.html">
            <i className="fa fa-heart badge-btn top-right" aria-hidden="true"></i>
          </a>
          <div className="card-details">
            <h3 className="card-text-title">Men Premium Jacket</h3>
            <p className="desc bold">Only 2000/- Rs</p>
          </div>
          <div className="card-btn">
            <button className="btn-primary btn-bg-color left-margin bold">
              Add to Cart
            </button>
            {/* <!-- <button className="btn-secondary btn-color">Secondary</button> --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductsListing };
