import axios from "axios";
import CookieHelper from "../../utils/cookies/cookieHelper";

const getCartItems = () => {
    const cookieHelper = new CookieHelper();
    const userData = cookieHelper.getCookie();
    const token = userData.auth_token;
    return axios.get("/api/user/cart", { headers: { authorization: token } });
}

export { getCartItems };