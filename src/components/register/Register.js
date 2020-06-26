import React, { useState } from "react";
import "./Register.scss";
import FormInput from "../form-input/FormInput";
import MyButton from "../myButton/MyButton";

const Register = () => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async event => {
      event.preventDefault()
      if(password !== confirmPassword) {
          alert()
      }
  }

  const handleChange = 2;
  return (
    <div className="sign-up">
      <h2> I do not have an account </h2>
      <span> Sign up with your email and password </span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={displayName}
          onChange={confirmPassword}
          label="Confirm Password"
          required
        ></FormInput>
        <MyButton type="submit"> Register </MyButton>
      </form>
    </div>
  );
};

export default Register;
