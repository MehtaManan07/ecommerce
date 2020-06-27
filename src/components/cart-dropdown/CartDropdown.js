import React from "react";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import MyButton from "../myButton/MyButton";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/CartSelector";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <MyButton> CHECKOUT </MyButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems, // this will make sure that cartdropdown comp isn't getting rerendered whenever the state changes that is unrelated to the cart items
});

export default connect(mapStateToProps)(CartDropdown);
