import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import IssIdee from "../../assets/img/IssIdee.png";

const Navbar = ({ setUser }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const user = sessionStorage.getItem("user");

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/login", { replace: true });
    console.log("Logout successful");
  };

  return (
    <nav className="navWrapper">
      <div className="logoContainer">
        <Link to="/">
          {/* <span className="brandText">IssIdee</span> */}
          <img
            src={IssIdee}
            alt="IssIdee"
            className="brandLogo
          "
          />
        </Link>
      </div>
      <div className={`linkWrapper ${show ? "show" : ""}`}>
        <div
          className="closeIcon"
          onClick={toggleMenu}>
          <p>❌</p>
        </div>
        <NavLink
          to="/"
          onClick={() => setShow(false)}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setShow(false)}>
          About
        </NavLink>
        {user ? (
          <NavLink
            to="/login"
            onClick={() => {
              setShow(false);
              handleLogout();
            }}>
            Logout
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            onClick={() => setShow(false)}>
            Login
          </NavLink>
        )}
      </div>
      <div
        className="burgerMenu"
        onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
