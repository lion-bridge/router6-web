import React from "react";
import { Button } from "antd";
import { useAuth } from "./AuthProvider";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LocationStateTyep } from "./inteface";

const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const locationFrom = (location?.state as LocationStateTyep)?.from;
  const onLogout = async () => {
    await auth?.logout?.();
    navigate(locationFrom?.pathname || "/login", {
      replace: true,
      state: location,
    });
  };
  return (
    <div>
      <span>欢迎{auth?.user?.username}</span>
      <Button onClick={onLogout}>退出登陆</Button>
      <Outlet />
    </div>
  );
};

export default Logout;
