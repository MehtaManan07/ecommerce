import React from "react";
import { ReactComponent as SHOPICON } from "../../assets/ShopBag.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/CartActions";
const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <SHOPICON className="shopping-icon" />
      <span className="item-count"> 0 </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(null, mapDispatchToProps)(CartIcon);
