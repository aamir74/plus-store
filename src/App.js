import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./customComponents/Navbar/Navbar";
import Toast from "./customComponents/Notification/Toast";
import { useAuth } from "./hooks";
import logo from "./logo.png";
import { Address } from "./pages/Address/Address";
import { Login } from "./pages/Authentication/Login";
import { Signup } from "./pages/Authentication/Signup";
import { Cart } from "./pages/Cart/Cart";
import { Home } from "./pages/HomePage/Home";
import { ProductsListing } from "./pages/Products/ProductsListing";
import { Wishlist } from "./pages/wishlist/Wishlist";
import CookieHelper from "./utils/cookies/cookieHelper";

function App() {
  const { authState, authDispatch } = useAuth();
  const cookieHelper = new CookieHelper();
  const userData = cookieHelper.getCookie();
  const setUserToken = () => {
    if (userData?.auth_token) {
      const userToken = userData.auth_token;
     
      authDispatch({ type: "SET_USER_DATA", payload: userToken });
    }
  };
  useEffect(() => {
    setUserToken();
  }, []);

  return (
    <>
      <Router>
        <Toast />
        <Navbar />
        <Routes>
          <Route path="*" element={<Navigate replace to="/login" />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<ProductsListing />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          {userData?.auth_token && (
            <>
              {" "}
              <Route path="/cart" exact element={<Cart />} />
              <Route path="/wishlist" exact element={<Wishlist />} />
              <Route path="/address" exact element={<Address />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
