import React from "react";
import { useState } from "react";
import FormInput from "../form-input/FormInput";
import "./Login.scss";
import MyButton from "../myButton/MyButton";
import { loginWithGoogle, auth } from "../../firebase/FirebaseUtils";
import { toast, ToastContainer } from "react-toastify";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      toast.success("Login Success");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error('User not found')
      } else if(error.code === 'auth/wrong-password') {
        toast.error('Incorrect Password')
      }
    }
  };

  return (
    <div className="sign-in">
      <h2> I already have an account </h2>
      <ToastContainer />
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
        <div className="buttons">
          <MyButton type="submit" value="SubmitForm">
            Login
          </MyButton>
          <MyButton onClick={loginWithGoogle} isGoogleSignin value="SubmitForm">
            Login with google
          </MyButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
