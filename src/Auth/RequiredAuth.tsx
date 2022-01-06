/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUser } from "./user";
const RequiredAuth = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  const location = useLocation();

  if (!getUser()?.token) {
    return <Navigate to="login" state={{ from: location }} replace></Navigate>;
  }

  return (
    <div>
      {children}
      <Outlet />
    </div>
  );
};
export default RequiredAuth;
