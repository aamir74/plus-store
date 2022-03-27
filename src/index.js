import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider, FilterProvider, WishlistProvider } from "./hooks/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
