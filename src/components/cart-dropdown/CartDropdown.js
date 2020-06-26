import React from "react";
import "./CartDropdown.scss";
import MyButton from "../myButton/MyButton";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <MyButton> CHECKOUT </MyButton>
      </div>
    </div>
  );
};

export default CartDropdown;
