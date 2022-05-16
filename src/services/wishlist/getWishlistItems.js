import axios from "axios";
import CookieHelper from "../../utils/cookies/cookieHelper";

const getWishlistItems = () => {
    const cookieHelper = new CookieHelper();
    const userData = cookieHelper.getCookie();
    const token = userData.auth_token;    return axios.get("/api/user/wishlist", { headers: { authorization: token } });
}

export { getWishlistItems };