import React, { useState } from "react";
import { useNotifications } from "reapop";

import { useAddress } from "../../hooks/context/address-context";
import AddressCard from "./components/AddressCard";
import AddressForm from "./components/AddressForm";

import "./Address.css";
import { useAuth, useCart } from "../../hooks";
import { useNavigate } from "react-router";
import { removeFromCart } from "../../services";

const Address = () => {
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const { authState } = useAuth();
  const token = authState?.auth;
  const { addressState } = useAddress();
  const adresses = addressState.address;
  const [showForm, setShowForm] = useState(false);
  const [addressSelected, setAddressSelected] = useState(false);

  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const cartQuantity = cart.reduce((acc, curr) => acc + Number(curr.qty), 0);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + Number(curr.price * curr.qty),
    0
  );

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleProceed = async () => {
    if (!addressSelected) {
      return notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Please select address</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    }

    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!response) {
      return notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Razorpay SDK failed to load</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: (totalPrice + 100) * 100,
      curreny: "INR",
      name: "Plus Store",
      description: "Thank you for shopping with us.",

      handler: ({ payment_id }) => {
        notify({
          title: <h3> Success :)</h3>,
          message: <h5>Order placed successfully</h5>,
          status: "success",
          dismissible: true,
          dismissAfter: 5000,
          showDismissButton: true,
          position: "bottom-left",
        });
        emptyCart();
        navigate("/products");
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const emptyCart = async () => {
    try {
      cartDispatch({ type: "EMPTY_CART" });
      for (let i = 0; i < cart.length; i++) {
        const res = await removeFromCart(cart[i]._id, token);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="address-heading">
        <h1>My Addresses</h1>
      </div>
      <div className="address-buttons">
        <button
          onClick={() => setShowForm(true)}
          className="btn-text btn-secondary"
          type="submit"
        >
          Add Address
        </button>
        <button
          onClick={handleProceed}
          className="btn-text btn-primary btn-bg-color"
          type="submit"
        >
          Proceed to checkout
        </button>
      </div>
      <div className="address-card">
        {adresses?.length
          ? adresses.map((addr) => (
              <AddressCard
                key={addr.id}
                id={addr.id}
                addr={addr.addr}
                city={addr.city}
                pincode={addr.pincode}
                setAddressSelected={setAddressSelected}
              />
            ))
          : ""}
      </div>
      <div className="address-container">{showForm && <AddressForm />}</div>
    </>
  );
};

export { Address };
