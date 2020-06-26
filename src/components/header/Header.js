import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/FirebaseUtils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
const Header = ({ currentUser }) => {
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
      <CartDropdown />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
