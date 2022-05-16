import React from "react";
import { useFilter } from "../../../hooks";
import { handleFilter } from "../../../utils";

const Filters = () => {
  const { state, dispatch } = useFilter();
  const handleChange = (e) => handleFilter(e, dispatch);
  return (
    <aside className="filters">
      <div className="filters-head">
        <p className="h5 bold">Filters</p>
        {/* <p>Clear</p> */}
        <button
          className="btn-text btn-secondary  left-margin bold"
          name="clear"
          onClick={handleChange}
        >
          Clear Filters
        </button>
      </div>
      <hr />
      <div className="filter">
        <p className="h6 bold">Price</p>
        <input
          name="price"
          type="range"
          min="1000"
          max="5000"
          value={state.price}
          onChange={handleChange}
        />
      </div>
      <div className="filter">
        <p className="h6 bold">Category</p>
        <input
          type="checkbox"
          id="c1"
          name="category"
          value="Men"
          onChange={handleChange}
          checked={state.category.includes("Men") ? true : false}
        />
        <label htmlFor="c1"> Men</label>
        <br />
        <input
          type="checkbox"
          id="c2"
          name="category"
          value="Women"
          onChange={handleChange}
          checked={state.category.includes("Women") ? true : false}
        />
        <label htmlFor="c2">Women</label>
        <br />
        <input
          type="checkbox"
          id="c3"
          name="category"
          value="Kids"
          onChange={handleChange}
          checked={state.category.includes("Kids") ? true : false}
        />
        <label htmlFor="c3">Kids</label>
        <br />
      </div>
      <div className="filter">
        <p className="h6 bold">Rating</p>
        <input
          type="radio"
          id="r1"
          name="rating"
          value="4star"
          onChange={handleChange}
          checked={state.rating === 4 ? true : false}
        />
        <label htmlFor="r1">4 Stars & above</label>
        <br />
        <input
          type="radio"
          id="r2"
          name="rating"
          value="3star"
          onChange={handleChange}
          checked={state.rating === 3 ? true : false}
        />
        <label htmlFor="r2">3 Stars & above</label>
        <br />
        <input
          type="radio"
          id="r3"
          name="rating"
          value="2star"
          onChange={handleChange}
          checked={state.rating === 2 ? true : false}
        />
        <label htmlFor="r3">2 Stars & above</label>
        <br />
        <input
          type="radio"
          id="r4"
          name="rating"
          value="1star"
          onChange={handleChange}
          checked={state.rating === 1 ? true : false}
        />
        <label htmlFor="r4">1 Stars & above</label>
        <br />
      </div>
      <div className="filter">
        <p className="h6 bold">Sort By</p>
        <input
          type="radio"
          id="s1"
          name="pricing"
          value="asc"
          // onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
          onChange={handleChange}
          checked={state.sortBy === "LOW_TO_HIGH" ? true : false}
        />
        <label htmlFor="s1">Price - Low to High</label>
        <br />
        <input
          type="radio"
          id="s2"
          name="pricing"
          value="desc"
          onChange={handleChange}
          checked={state.sortBy === "HIGH_TO_LOW" ? true : false}
        />
        <label htmlFor="s2">Price - High to Low</label>
        <br />
      </div>
    </aside>
  );
};

export { Filters };
