import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = localStorage.getItem("user");
  console.log("User: ", user);
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
