import axios from "axios";

const getWishlistItems = () => {
    const token = localStorage.getItem("auth_token");
    return axios.get("/api/user/wishlist", { headers: { authorization: token } });
}

export { getWishlistItems };