import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Navbar from "./customComponents/Navbar/Navbar";
import Toast from "./customComponents/Notification/Toast";
import logo from "./logo.png";
import { Login } from "./pages/Authentication/Login";
import { Signup } from "./pages/Authentication/Signup";
import { Cart } from "./pages/Cart/Cart";
import { Home } from "./pages/HomePage/Home";
import { ProductsListing } from "./pages/Products/ProductsListing";
import { Wishlist } from "./pages/wishlist/Wishlist";

function App() {
  return (
    <>
      <Router>
        <Toast />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<ProductsListing />} />

          <Route path="/cart" exact element={<Cart />} />

          <Route path="/wishlist" exact element={<Wishlist />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
