import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

const useResetPassword = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const [email, setEmail] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    resetPassword(email)
      .unwrap()
      .then(() => {
        toast.success("Request sent, check email for reset link");
      })
      .catch(() => {
        toast.error("Failed to send request");
      });
  };

  return {
    email,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useResetPassword;
