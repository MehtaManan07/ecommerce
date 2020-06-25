import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/FirebaseUtils";
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/shop" className="option">Contact</Link>
        {!currentUser ? (
          <Link className="option" to="/signin"> Login </Link>
        ) : (
          <div style={{cursor: 'pointer'}} className="option" onClick={() => auth.signOut()}> Logout </div>
        )}
      </div>
    </div>
  );
};

export default Header;
