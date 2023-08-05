import { RequireAuth } from "@/components/utils";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Full Auth | Dashboard",
  description: "Full Auth dashboard page",
};

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <RequireAuth>{children}</RequireAuth>;
};

export default Layout;
