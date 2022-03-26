import axios from "axios";

const getCartItems = () => {
    const token = localStorage.getItem("auth_token");
    return axios.get("/api/user/cart", { headers: { authorization: token } });
}

export { getCartItems };