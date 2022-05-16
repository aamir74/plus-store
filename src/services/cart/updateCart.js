import axios from "axios";
import CookieHelper from "../../utils/cookies/cookieHelper";

const updateCart = (id, actionType) => {
  const cookieHelper = new CookieHelper();
  const userData = cookieHelper.getCookie();
  const token = userData.auth_token;  return axios.post(
    `/api/user/cart/${id}`,
    { action: { type: actionType } },
    { headers: { authorization: token } }
  );
};

export { updateCart };
