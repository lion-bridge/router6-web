import { Space } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import Logout from "./logout";
const Home: React.FC = () => {
  const location = useLocation();
  const auth = useAuth();
  return (
    <Space direction="vertical">
      {!auth?.user?.token ? "首页，您可以登录后查看更多信息" : <div>
        欢迎光临
        <Logout />
        </div>}

      {!auth?.user?.token && (
        <Link to={"/login"} state={{ from: location }} replace>
          去登录...
        </Link>
      )}
    </Space>
  );
};
export default Home;
