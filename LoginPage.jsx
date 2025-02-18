import React from "react";
import { Button, Card, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <Card title="Iniciar Sesión" style={styles.card}>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item label="Usuario" name="username" rules={[{ required: true, message: "Ingrese su usuario!" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Contraseña" name="password" rules={[{ required: true, message: "Ingrese su contraseña!" }]}>
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>Ingresar</Button>
        </Form>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    width: 300,
  },
};

export default LoginPage;
