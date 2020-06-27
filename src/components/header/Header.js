import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/FirebaseUtils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/UserSelector";
import { selectCartHidden } from "../../redux/cart/CartSelector";
import { createStructuredSelector } from "reselect";
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          Contact
        </Link>
        {!currentUser ? (
          <Link className="option" to="/signin">
            {" "}
            Login{" "}
          </Link>
        ) : (
          <div
            style={{ cursor: "pointer" }}
            className="option"
            onClick={() => auth.signOut()}
          >
            Logout
          </div>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
