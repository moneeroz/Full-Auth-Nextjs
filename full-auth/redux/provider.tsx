"use client";

import { ReactNode } from "react";
import { store } from "./store";
import { Provider } from "react-redux";

interface Props {
  children: ReactNode;
}

const CustomProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default CustomProvider;
