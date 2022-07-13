import { addToWishlist } from "../../services";

const handleAddToWishlist = async ({ product, wishlistDispatch, token }) => {
  const res = await addToWishlist(product, token);
  if (res.status === 201)
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: res.data.wishlist });
};
export { handleAddToWishlist };
