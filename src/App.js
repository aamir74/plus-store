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
    <div className="App">
      <Navbar />
      <Signup/>
    </div>
  );
}

export default App;
