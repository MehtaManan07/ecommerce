import React from "react";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import MyButton from "../myButton/MyButton";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      {cartItems.map(cartItem => (
      <CartItem key={cartItem.id} item={cartItem} />
      ))}
      </div>
        <MyButton> CHECKOUT </MyButton>
    </div>
  );
};

const mapStateToProps = ({cart: { cartItems }}) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);
