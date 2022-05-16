import axios from "axios";
import CookieHelper from "../../utils/cookies/cookieHelper";

const addToWishlist = (product) => {
  const cookieHelper = new CookieHelper();
  const userData = cookieHelper.getCookie();
  const token = userData.auth_token;  return axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: token } }
  );
};

export { addToWishlist };
