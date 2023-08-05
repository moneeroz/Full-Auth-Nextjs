"use client";

import { useResetPasswordConfirm } from "@/hooks";
import { Form } from ".";

interface Props {
  uid: string;
  token: string;
}

const PasswordResetConfirmForm = ({ uid, token }: Props) => {
  const {
    new_password,
    re_new_password,
    isLoading,
    handleChange,
    handleSubmit,
  } = useResetPasswordConfirm(uid, token);

  const config = [
    {
      labelText: "New Password",
      labelId: "new_password",
      value: new_password,
      type: "password",
      required: true,
    },
    {
      labelText: "Confirm New Password",
      labelId: "re_new_password",
      value: re_new_password,
      type: "password",
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      btnText="Reset password"
      isLoading={isLoading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default PasswordResetConfirmForm;
