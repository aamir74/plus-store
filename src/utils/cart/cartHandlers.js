import { addToCart, removeFromCart } from "../../services";

const handleAddToCart = async ({ product, cartDispatch, token }) => {
  const res = await addToCart(product, token);
  if (res.status === 201)
    cartDispatch({ type: "ADD_TO_CART", payload: res.data.cart });
};

export { handleAddToCart };
