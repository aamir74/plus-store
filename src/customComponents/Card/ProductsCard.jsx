import React from "react";
import { useNavigate } from "react-router";
import { useCart } from "../../hooks";
import { addToCart, getCartItems } from "../../services";
import { handleAddToCart } from "../../utils";

const Card = (props) => {
  const navigate = useNavigate();
  const { image, name, price, id, product } = props;
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const checkCart = async (id) => {
    const res = await getCartItems();
    if (res.status === 200) {
      return res.data.cart?.find((item) => {
        return item._id === id;
      });
    } else return false;
  };
  const handleClick = async (product) => {
    const productExist = await checkCart(product._id);
    if (productExist) navigate("/cart");
    else {
      await handleAddToCart(product, cartDispatch);
      navigate("/cart");
    }
  };
  return (
    <div className="card card-with-text" key={id}>
      <img className="card-img" src={image} />
      <a href="wishlist.html">
        <i
          className="fa fa-heart badge-btn top-right empty"
          aria-hidden="true"
        ></i>
      </a>
      <div className="card-details">
        <h3 className="card-text-title">{name}</h3>
        <p className="desc bold">Only {price}/- Rs</p>
      </div>
      <div className="card-btn">
        <button
          className="btn-primary btn-bg-color left-margin bold"
          onClick={() => handleClick(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { Card };
