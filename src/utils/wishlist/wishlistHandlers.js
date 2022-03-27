import { addToWishlist } from "../../services";

const handleAddToWishlist = async (product, wishlistDispatch) => {
  const res = await addToWishlist(product);
  console.log(res.status);
  if (res.status === 201)
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: res.data.wishlist });
};
export { handleAddToWishlist };
