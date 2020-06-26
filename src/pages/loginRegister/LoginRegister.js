import React from "react";
import "./LoginRegister.scss";
import Login from "../../components/Login/Login";
import Register from "../../components/register/Register";
const LoginRegister = () => {
  return (
    <div className="LoginRegister">
      <Login />
      <Register />
    </div>
  );
};

export default LoginRegister;
