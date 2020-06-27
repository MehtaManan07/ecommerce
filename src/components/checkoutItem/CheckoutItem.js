import React from "react";
import "./CheckoutItem.scss";
const CheckoutItem = ({ cartItem }) => {
    console.log(cartItem)
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name"> {cartItem.name} </span>
      <span className="quantity"> {cartItem.quantity} </span>
      <div className="remove-button"> &#10005; </div>
      <span className="price"> {cartItem.price} </span>
    </div>
  );
};

export default CheckoutItem;
