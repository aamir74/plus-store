import React from "react";
import "./Authentication.css";
const Login = () => {
  return (
    <div className="form-container">
      <div className="auth-card">
        <form>
          <p className="h2 text-gray">Login</p>
          <hr />
          <br />
          <div className="text-left">
            <label htmlFor="inputbox_1" className="text-label text-gray text-md">
              Email
            </label>
            <div>
              <input
                id="inputbox_1"
                className="textbox"
                type="email"
                placeholder="Eg.abc@gmail.com"
              />
            </div>
          </div>
          <div className="text-left">
            <label htmlFor="inputbox_2" className="text-label text-gray text-md">
              Password
            </label>
            <div>
              <input
                id="inputbox_2"
                className="textbox"
                type="password"
                placeholder="Eg.123Abc"
              />
            </div>
          </div>
          <div>
            <button className="btn-text btn-primary btn-bg-color" type="submit">
              Login
            </button>
          </div>
          <br />
          <p>
            Not Registered? <a href="signup.html">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export { Login };
