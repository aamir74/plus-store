import React from "react";

const AddressCard = ({ id, addr, city, pincode, setAddressSelected }) => {
  return (
    <div className="address-details">
      <input
        type="radio"
        id={id}
        name="address"
        value={id}
        onChange={() => setAddressSelected(true)}
      />
      <div className="address-fields">
        <p className="desc">{addr}</p>
      </div>
      <div className="address-fields">
        <p className="bold">City</p>
        <p className="desc">{city}</p>
      </div>
      <div className="address-fields">
        <p className="bold">Pincode</p>
        <p className="desc">{pincode}</p>
      </div>
      <hr />
      <br />
    </div>
  );
};

export default AddressCard;
