import React from "react";
import "./MyButton.scss";
const MyButton = ({ children, inverted, isGoogleSignin, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignin ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      } custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default MyButton;
