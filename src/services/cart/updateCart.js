import axios from "axios";

const updateCart = (id, actionType, token) => {
  return axios.post(
    `/api/user/cart/${id}`,
    { action: { type: actionType } },
    { headers: { authorization: token } }
  );
};

export { updateCart };
