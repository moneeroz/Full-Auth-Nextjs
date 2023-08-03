"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store";

interface Props {
  children: ReactNode;
}

const CustomProvider = ({ children }: Props) => {
  return <Provider store={makeStore()}>{children}</Provider>;
};

export default CustomProvider;
