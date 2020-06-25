import React from "react";
import { useState } from "react";

const Login = () => {
    const [user , setUser] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        const {name , value} = e.target   
        setUser(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

  const handleSubmit = (e) => {
    const { email, password } = user;
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="sign-in">
      <h2> I already have an account </h2>
      <span> Sign in with your email and password </span>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleChange}
          value={user.email}
          required
          type="email"
        />
        <label> Email </label>
        <input
          name="password"
          onChange={handleChange}
          value={user.password}
          required
          type="password"
        />
        <label> Password </label>
        <input type="submit" value="SubmitForm" />
      </form>
    </div>
  );
};

export default Login;
