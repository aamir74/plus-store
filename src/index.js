import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  AuthProvider,
  CartProvider,
  FilterProvider,
  WishlistProvider,
} from "./hooks/index";
import { NotificationsProvider } from "reapop";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <NotificationsProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </NotificationsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
