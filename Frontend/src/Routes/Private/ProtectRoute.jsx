import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const token = localStorage.getItem("token_user");
  if (!token) {
    return <Navigate to={"/auth/login"} />;
  }

  return <Outlet />;
};

export default ProtectRoute;
