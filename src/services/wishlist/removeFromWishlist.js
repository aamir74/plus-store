import axios from "axios";
import CookieHelper from "../../utils/cookies/cookieHelper";

const removeFromWishlist = (id, token) => {
  return axios.delete(`/api/user/wishlist/${id}`, {
    headers: { authorization: token },
  });
};

export { removeFromWishlist };
