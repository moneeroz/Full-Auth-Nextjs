"use client";

import { useLogin } from "@/hooks";
import { Form } from ".";

const LoginForm = () => {
  const { email, password, isLoading, handleChange, handleSubmit } = useLogin();

  const config = [
    {
      labelText: "Email address",
      labelId: "email",
      type: "email",
      value: email,
      required: true,
    },
    {
      labelText: "Password",
      labelId: "password",
      type: "password",
      value: password,
      link: {
        linkText: "Forgot password?",
        linkUrl: "/password-reset",
      },
      required: true,
    },
  ];
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Sign in"
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginForm;
