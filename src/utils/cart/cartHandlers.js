import { addToCart } from "../../services";

const handleAddToCart = async (product, cartDispatch) => {
  const res = await addToCart(product);
  console.log(res);
  if (res.status === 201)
    cartDispatch({ type: "ADD_TO_CART", payload: res.data.cart });
};
export { handleAddToCart };
