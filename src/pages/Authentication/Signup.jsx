import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Authentication.css";
import { Input } from "../../customComponents/Form/Input";

const Signup = () => {
  const [formData, setFormData] = useState({
    test: "",
  });
  const validator = Yup.object({
    test: Yup.string()
      .min(3, "Must be 3 to 15 characters")
      .max(15, "Must be 3 to 15 characters")
      .required("Required"),
  });
  const handleSubmit = async (form) => {
    console.log(form.data);
  };
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
              
              <p className="h2 text-gray">Signup</p>
              <hr />
              <br />
              {/* <Input
                label="test"
                id="test"
                className="textbox"
                type="text"
                placeholder="Eg.TanayPratap"
                name="test"
                value={formData.test}
                onChange={(e) =>
                  setFormData({ ...formData, test: e.target.value })
                }
              /> */}
              <div className="text-left">
                <label
                  htmlFor="inputbox_1"
                  className="text-label text-gray text-md"
                >
                  Username
                </label>
                <div>
                  <input
                    id="inputbox_1"
                    className="textbox"
                    type="text"
                    placeholder="Eg.TanayPratap"
                  />
                </div>
              </div>
              <div className="text-left">
                <label
                  htmlFor="inputbox_2"
                  className="text-label text-gray text-md"
                >
                  Email
                </label>
                <div>
                  <input
                    id="inputbox_2"
                    className="textbox"
                    type="email"
                    placeholder="Eg.abc@gmail.com"
                  />
                </div>
              </div>
              <div className="text-left">
                <label
                  htmlFor="inputbox_3"
                  className="text-label text-gray text-md"
                >
                  Contact No.
                </label>
                <div>
                  <input
                    id="inputbox_3"
                    className="textbox"
                    type="text"
                    placeholder="Eg.8828280010"
                  />
                </div>
              </div>
              <div className="text-left">
                <label
                  htmlFor="inputbox_4"
                  className="text-label text-gray text-md"
                >
                  Password
                </label>
                <div>
                  <input
                    id="inputbox_4"
                    className="textbox"
                    type="password"
                    placeholder="Eg.123Abc"
                  />
                </div>
              </div>
              <div>
                <button
                  className="btn-text btn-primary btn-bg-color"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
              <br />
              <p>
                Already Registered? <a href="login.html">Login</a>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { Signup };
