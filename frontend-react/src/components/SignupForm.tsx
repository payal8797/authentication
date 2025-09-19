import { useState } from "react";
import { Form, Input, Button, Card, App } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signup } from "../api/auth";
import type { User } from "../api/auth";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();
  const handleFinish = async (values: { username: string; password: string }) => {
    setLoading(true);
    try {
      const user: User = await signup(values.username, values.password);
      message.success(`Signup successful! Welcome ${user.username}, please login.`);
    } catch (err: any) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Signup" style={{ maxWidth: 400, margin: "auto" }}>
      <Form onFinish={handleFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input a Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input a Password!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Signup
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
