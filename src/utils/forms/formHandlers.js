import { login, signup } from "../../services";
import CookieHelper from "../cookies/cookieHelper";

const cookieHelper = new CookieHelper();

const signupFormChangeHandler = async (e, formData, setFormData) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
const signupFormSubmitHandler = async (data) => {
  try {
    const user = await signup(data);
    cookieHelper.setCookie({ auth_token: user.data.encodedToken }, null, 2);
  } catch (err) {
    console.log("err,", err);
    throw err;
  }
};

const loginFormChangeHandler = async (e, formData, setFormData) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
const loginFormSubmitHandler = async (data, authDispatch) => {
  try {
    const user = await login(data);
    cookieHelper.setCookie({ auth_token: user.data.encodedToken }, null, 2);
    authDispatch({ type: "SET_USER_DATA", payload: user.data.encodedToken });
  } catch (err) {
    console.log("err,", err);
    throw err;
  }
};
export {
  signupFormChangeHandler,
  signupFormSubmitHandler,
  loginFormSubmitHandler,
  loginFormChangeHandler,
};
