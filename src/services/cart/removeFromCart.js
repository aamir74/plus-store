import axios from "axios";

const removeFromCart = (id) => {
  const token = localStorage.getItem("auth_token");
  return axios.delete(`/api/user/cart/${id}`, {
    headers: { authorization: token },
  });
};

export { removeFromCart };
