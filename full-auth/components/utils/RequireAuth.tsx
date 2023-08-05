"use client";

import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Spinner } from "../common";

interface Props {
  children: ReactNode;
}

const RequireAuth = ({ children }: Props) => {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect("/auth/login");
  }

  return <>{children}</>;
};

export default RequireAuth;
