import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Cooking from "../../assets/videos/Cooking.mp4";

const Login = ({ setUser }) => {
  const [user, setLocalUser] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      sessionStorage.setItem("user", user);
      setUser(user);
      console.log("Login successful with user Name: ", user);
      navigate("/");
    } else {
      console.log("User name is required");
    }
  };

  return (
    <div className="loginWrapper">
      <video
        autoPlay
        loop
        muted
        className="video">
        <source
          src={Cooking}
          type="video/mp4"
        />
      </video>
      <div className="headingWrapper">
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
              onChange={(e) => setLocalUser(e.target.value)}
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
