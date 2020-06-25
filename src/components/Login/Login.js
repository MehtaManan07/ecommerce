import React from "react";
import { useState } from "react";
import FormInput from "../form-input/FormInput";
import "./Login.scss";
import MyButton from "../myButton/MyButton";
import { loginWithGoogle } from "../../firebase/FirebaseUtils";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="sign-in">
      <h2> I already have an account </h2>
      <span> Sign in with your email and password </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          handleChange={handleChange}
          value={user.email}
          label="Email"
          required
          type="email"
        />
        <FormInput
          name="password"
          handleChange={handleChange}
          value={user.password}
          required
          label="Password"
          type="password"
        />
        <MyButton type="submit" value="SubmitForm">Login</MyButton>
        <MyButton onClick={loginWithGoogle} value="SubmitForm">Login with google</MyButton>
      </form>
    </div>
  );
};

export default Login;
