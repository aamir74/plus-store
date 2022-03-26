import React from "react";

const HeroArea = () => {
  return (
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
  );
};

export { HeroArea };
