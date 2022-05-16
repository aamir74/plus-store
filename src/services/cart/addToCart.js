import axios from "axios";
import CookieHelper from "../../utils/cookies/cookieHelper";

const addToCart = (product) => {
  const cookieHelper = new CookieHelper();
  const userData = cookieHelper.getCookie();
  const token = userData.auth_token;
  return axios.post(
    "/api/user/cart",
    { product },
    { headers: { authorization: token } }
  );
};

export { addToCart };
