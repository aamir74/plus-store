import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import "./App.css";
import Navbar from "./customComponents/Navbar/Navbar";
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
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<ProductsListing />} />

          <Route path="/cart" exact element={<Cart />} />

          <Route path="/wishlist" exact element={<Wishlist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
