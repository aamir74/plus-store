import React from "react";
import { Categories } from "./components/Categories";
import { HeroArea } from "./components/HeroArea";
import { Products } from "./components/NewArrivals";
import "./Home.css";

const Home = () => {
  return (
    <>
      <HeroArea />
      <Categories />
      <Products />
    </>
  );
};

export { Home };
