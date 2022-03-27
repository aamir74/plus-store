import axios from "axios";

const addToWishlist = (product) => {
  const token = localStorage.getItem("auth_token");
  return axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: token } }
  );
};

export { addToWishlist };
