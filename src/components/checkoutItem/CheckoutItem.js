import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/CartActions";
const CheckoutItem = ({ cartItem, clearItem }) => {
    console.log(cartItem)
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name"> {cartItem.name} </span>
      <span className="quantity"> {cartItem.quantity} </span>
      <span className="price"> {cartItem.price} </span>
      <div onClick={() => clearItem(cartItem)} className="remove-button"> &#10005; </div>
    </div>
  );
};

const mapDispatchToProps = dispatch =>({
  clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
