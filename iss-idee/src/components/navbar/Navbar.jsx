import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    console.log("Logout successful");
  };

  return (
    <nav className="navWrapper">
      <div>
        <Link to="/">logo</Link>
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
