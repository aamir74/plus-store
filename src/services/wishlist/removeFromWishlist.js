import axios from "axios";

const removeFromWishlist = (id) => {
  const token = localStorage.getItem("auth_token");
  return axios.delete(`/api/user/wishlist/${id}`, {
    headers: { authorization: token },
  });
};

export { removeFromWishlist };
