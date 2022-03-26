import axios from "axios";

const updateCart = (id, actionType) => {
  const token = localStorage.getItem("auth_token");
  return axios.post(
    `/api/user/cart/${id}`,
    { action: { type: actionType } },
    { headers: { authorization: token } }
  );
};

export { updateCart };
