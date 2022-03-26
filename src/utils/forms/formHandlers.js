import { login, signup } from "../../services";

const signupFormChangeHandler = async (e, formData, setFormData) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
const signupFormSubmitHandler = async (data) => {
  try {
    const user = await signup(data);
    localStorage.setItem("auth_token", user.data.encodedToken);
  } catch (err) {
    console.log("err,", err);
    throw err;
  }
};

const loginFormChangeHandler = async (e, formData, setFormData) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
const loginFormSubmitHandler = async (data) => {
  try {
    console.log("log called");
    const user = await login(data);
    localStorage.setItem("auth_token", user.data.encodedToken);
    console.log(user);
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
