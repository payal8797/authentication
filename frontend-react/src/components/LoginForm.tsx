import { useState } from "react";
import { Form, Input, Button, Card, App } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "../api/auth";
import type { AuthResponse } from "../api/auth";

interface Props {
  onLogin: (token: string) => void;
}

export default function LoginForm({ onLogin }: Props) {
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp(); 
  const handleFinish = async (values: { username: string; password: string }) => {
    setLoading(true);
    try {
      const data: AuthResponse = await login(values.username, values.password);
      localStorage.setItem("token", data.access_token);
      onLogin(data.access_token);
      message.success("Login successful!");
    } catch (err: any) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Login" style={{ maxWidth: 400, margin: "auto" }}>
      <Form onFinish={handleFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
