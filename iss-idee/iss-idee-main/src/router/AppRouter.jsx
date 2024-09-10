import React, { useState, useEffect } from "react";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Detail from "../pages/detail/Detail";
import Navbar from "../components/navbar/Navbar";
import PrivateRouter from "./PrivateRouter";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const AppRouter = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(localStorage.getItem("user"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/about"
            element={<PrivateRouter />}>
            <Route
              path=""
              element={<About />}
            />
          </Route>
          <Route
            path="/detail"
            element={<PrivateRouter />}>
            <Route
              path=""
              element={<Detail />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
