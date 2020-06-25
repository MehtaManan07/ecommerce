import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'
import { ReactComponent as Logo } from "../../assets/logo.svg";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option"> SHOP </Link>
        <Link to="/shop" className="option"> Contact </Link>
      </div>
    </div>
  );
};

export default Header;
