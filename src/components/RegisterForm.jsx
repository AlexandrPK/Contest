import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";

import { registerThunk } from "../redux/registerSlice";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(registerThunk(values));
    
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "15px" }}>Регистрация</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Имя"
          name="firstName"
          rules={[{ required: true, message: "Введите имя" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Фамилия"
          name="lastName"
          rules={[{ required: true, message: "Введите фамилию" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Отчество"
          name="middleName"
          rules={[{ required: true, message: "Введите отчество" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Логин"
          name="login"
          rules={[
            {
              required: true,
              message: "Введите логин",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Введите действительный адрес электронной почты",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/,
              message:
                "Пароль должен содержать цифры, прописные и строчные буквы, длиной 8-15 символов",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterForm;
