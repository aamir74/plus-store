import axios from "axios";

const addToCart = (product) => {
  const token = localStorage.getItem("auth_token");
  return axios.post(
    "/api/user/cart",
    { product },
    { headers: { authorization: token } }
  );
};

export { addToCart };
