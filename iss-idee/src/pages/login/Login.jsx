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
    if (user.trim() && email.trim()) {
      sessionStorage.setItem("user", user);
      setUser(user);
      console.log("Login successful with user Name: ", user);
      navigate("/");
    } else {
      console.log("Name und E-Mail sind erforderlich.");
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
        <h1>IssIdee</h1>
        <h2>Finde Rezepte mit Zutaten, die du bereits zu Hause hast.</h2>
      </div>
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Dein Name"
              value={user}
              onChange={(e) => setLocalUser(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              placeholder="Deine E-Mail"
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
