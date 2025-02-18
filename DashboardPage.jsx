import React, { useState } from "react";
import { Button, Modal, Form, Input, Select, Card } from "antd";

const DashboardPage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <Card title="Dashboard" style={{ width: "100%" }}>
        <p>Bienvenido al panel de administración.</p>
      </Card>

      <Button
        type="primary"
        shape="circle"
        size="large"
        style={{ position: "fixed", bottom: 20, right: 20 }}
        onClick={() => setVisible(true)}
      >
        +
      </Button>

      <Modal title="Nueva Tarea" visible={visible} onCancel={() => setVisible(false)} footer={null}>
        <Form layout="vertical">
          <Form.Item label="Nombre" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Descripción" name="description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Estado" name="status">
            <Select>
              <Select.Option value="In Progress">En progreso</Select.Option>
              <Select.Option value="Done">Hecho</Select.Option>
              <Select.Option value="Paused">Pausado</Select.Option>
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit">Guardar</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default DashboardPage;