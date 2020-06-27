import React from "react";
import { ReactComponent as SHOPICON } from "../../assets/ShopBag.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/CartActions";
const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <SHOPICON className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((accQuan, cartItem) => accQuan + cartItem.quantity ,0)
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
