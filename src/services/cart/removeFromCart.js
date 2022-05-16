import axios from "axios";
import CookieHelper from "../../utils/cookies/cookieHelper";

const removeFromCart = (id) => {
  const cookieHelper = new CookieHelper();
  const userData = cookieHelper.getCookie();
  const token = userData.auth_token;  return axios.delete(`/api/user/cart/${id}`, {
    headers: { authorization: token },
  });
};

export { removeFromCart };
