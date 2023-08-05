"use client";

import { useResetPassword } from "@/hooks";
import { Form } from ".";

const PasswordResetForm = () => {
  const { email, isLoading, handleChange, handleSubmit } = useResetPassword();

  const config = [
    {
      labelText: "Email address",
      labelId: "email",
      value: email,
      type: "email",
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      btnText="Request password reset"
      isLoading={isLoading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default PasswordResetForm;
