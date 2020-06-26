import React, { useState } from "react";
import "./Register.scss";
import FormInput from "../form-input/FormInput";
import MyButton from "../myButton/MyButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, createUserProfileDoc } from "../../firebase/FirebaseUtils";

const Register = () => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (displayName.length < 4) {
      toast.error("Name must be atleast 4 characters long")
      return;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    } else if (password !== confirmPassword) {
      toast.error("Passwords must match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDoc(user, { displayName });
      toast.success("Register success");
      setUserData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="sign-up">
      <h2> I do not have an account </h2>
      <span> Sign up with your email and password </span>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Name"
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
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        ></FormInput>
        <MyButton type="submit"> Register </MyButton>
      </form>
    </div>
  );
};

export default Register;
