import cn from "classnames";
import { ReactNode } from "react";

interface Props {
  provider: "google" | "facebook";
  children: ReactNode;
  [rest: string]: any;
}

const SocialButton = ({ provider, children, ...rest }: Props) => {
  const className = cn(
    "flex-1 text-white rounded-md px-3 mt-3 py-2 font-medium",
    {
      "bg-red-400 hover:bg-red-500": provider === "google",
      "bg-blue-400 hover:bg-blue-500": provider === "facebook",
    },
  );

  return (
    <button className={className} {...rest}>
      <span className="flex justify-center sm:justify-start items-center">
        {children}
      </span>
    </button>
  );
};

export default SocialButton;
