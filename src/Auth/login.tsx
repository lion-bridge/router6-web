import React from "react";
import { Form, Input, Button } from "antd";
import { useAuth } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { LocationStateTyep, UserInfoType } from "./inteface";

const Login = () => {
  const [formRef] = Form.useForm<UserInfoType>();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const locationFrom = (location.state as LocationStateTyep)?.from;
  const onFinish = async ({ username, password }: UserInfoType) => {
    await auth?.login?.({ username, password });
    // 登陆成功后跳转页面
    navigate(locationFrom?.pathname || "/", { replace: true });
  };
  return (
    <Form form={formRef} onFinish={onFinish} style={{ width: 200 }}>
      <div>请登陆</div>
      <Form.Item name="username" label="用户名">
        <Input placeholder="用户名" />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password placeholder="密码" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        登陆
      </Button>
    </Form>
  );
};

export default Login;
