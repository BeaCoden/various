import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      localStorage.setItem("user", user);
      console.log("Login successful with user Name: ", user);
      navigate("/");
    } else {
      console.log("User name is required");
    }
  };

  return (
    <div className="loginWrapper">
      <div className="headerWrapper">
        <h1>Koch dir was...</h1>
      </div>
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
