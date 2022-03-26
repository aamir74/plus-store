import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import * as Yup from "yup";

import { Input } from "../../customComponents/Form/Input";
import { loginFormChangeHandler, loginFormSubmitHandler } from "../../utils";

import "./Authentication.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const validator = Yup.object({
    email: Yup.string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter valid email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Must be 6 to 15 characters")
      .max(15, "Must be 6 to 15 characters")
      .required("Required"),
  });
  const handleSubmit = async (form) => {
    try {
      await loginFormSubmitHandler(form.data);
      navigate("/");
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };
  const handleChange = async (e) =>
    loginFormChangeHandler(e, formData, setFormData);
  return (
    <div className="form-container">
      <div className="auth-card">
        <Formik
          enableReinitialize={true}
          initialValues={formData}
          validationSchema={validator}
          onSubmit={(values, { setErrors, setStatus, resetForm }) =>
            handleSubmit({
              data: values,
              setErrors,
              setStatus,
              resetForm,
            })
          }
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <p className="h2 text-gray">Login</p>
              <hr />
              <br />
              <Input
                label="Email"
                id="email"
                className="textbox"
                type="text"
                placeholder="Eg.neog@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Password"
                id="password"
                className="textbox"
                type="text"
                placeholder="Eg.Tom1234"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div>
                <button
                  className="btn-text btn-primary btn-bg-color"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <br />
              <p>
                Not Registered? <Link to="/signup">Sign up</Link>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { Login };
