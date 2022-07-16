import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import * as Yup from "yup";

import { Input } from "../../../customComponents/Form/Input";

import { useNotifications } from "reapop";
import { useAddress } from "../../../hooks/context/address-context";

const AddressForm = () => {
  const { addressState, addressDispatch } = useAddress();
  const initialData = {
    addr: "",
    city: "",
    pincode: "",
  };
  const [formData, setFormData] = useState(initialData);
  const validator = Yup.object({
    addr: Yup.string().required("Required"),
    city: Yup.string()
      .min(6, "Must be 6 to 15 characters")
      .max(15, "Must be 6 to 15 characters")
      .required("Required"),
    pincode: Yup.string()
      .min(6, "Must be 6 to 15 characters")
      .max(10, "Must be 6 to 15 characters")
      .required("Required"),
  });

  const handleSubmit = (form) => {
    const randomId = Math.floor(Math.random() * 90000) + 10000;
    addressDispatch({
      type: "ADD_ADDRESS",
      payload: { ...form.data, id: randomId },
    });
    setFormData(initialData);
  };

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
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
            <p className="h2 text-gray">Add Address</p>
            <hr />
            <br />
            <Input
              label="Street Address"
              id="addr"
              className="textbox"
              type="text"
              placeholder="57/A Azziano complex"
              name="addr"
              value={formData.addr}
              onChange={handleChange}
            />
            <Input
              label="City"
              id="city"
              className="textbox"
              type="text"
              placeholder="Eg.Mumbai"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <Input
              label="Pincode"
              id="pincode"
              className="textbox"
              type="text"
              placeholder="Eg.4000001"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            <div>
              <button
                className="btn-text btn-primary btn-bg-color"
                type="submit"
              >
                Add
              </button>
            </div>
            <br />
            <div>
              <button
                className="btn-text btn-primary btn-bg-color"
                type="submit"
                onClick={() => {
                  setFormData({
                    addr: "57/A Azziano complex",
                    city: "Mumbai",
                    pincode: "4000001",
                  });
                }}
              >
                Dummy address
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddressForm;
