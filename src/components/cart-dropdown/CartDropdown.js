import React from "react";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import MyButton from "../myButton/MyButton";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/CartSelector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from '../../redux/cart/CartActions'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
          cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        )) : <span className="empty-message"> Your cart is empty <span role="img" aria-label=""> &#128553; </span> </span>}
      </div>
      
      <MyButton onClick={() =>{
         history.push('/checkout')
         dispatch(toggleCartHidden())
         }}> CHECKOUT </MyButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems, // this will make sure that cartdropdown comp isn't getting rerendered whenever the state changes that is unrelated to the cart items
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
