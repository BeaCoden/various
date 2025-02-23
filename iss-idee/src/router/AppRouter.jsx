import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Detail from "../pages/detail/Detail";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => {
  const [user, setUser] = useState(sessionStorage.getItem("user") || null);

  useEffect(() => {
    const checkUser = () => {
      setUser(sessionStorage.getItem("user"));
    };

    window.addEventListener("storage", checkUser);
    return () => {
      window.removeEventListener("storage", checkUser);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar setUser={setUser} />
      <Routes>
        <Route
          path="/login"
          element={
            user ? (
              <Navigate
                to="/"
                replace
              />
            ) : (
              <Login setUser={setUser} />
            )
          }
        />

        <Route
          path="/"
          element={
            user ? (
              <Home />
            ) : (
              <Navigate
                to="/login"
                replace
              />
            )
          }
        />
        <Route
          path="/about"
          element={
            user ? (
              <About />
            ) : (
              <Navigate
                to="/login"
                replace
              />
            )
          }
        />
        <Route
          path="/detail"
          element={
            user ? (
              <Detail />
            ) : (
              <Navigate
                to="/login"
                replace
              />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
