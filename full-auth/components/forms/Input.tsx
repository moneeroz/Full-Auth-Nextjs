import Link from "next/link";
import { ChangeEvent, ReactNode } from "react";

interface Props {
  labelId: string;
  type: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  children: ReactNode;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
}

const Input = ({
  labelId,
  type,
  handleChange,
  value,
  children,
  link,
  required = false,
}: Props) => {
  return (
    <div>
      <label
        htmlFor={labelId}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {children}
      </label>

      <div className="mt-2">
        <input
          id={labelId}
          name={labelId}
          type={type}
          onChange={handleChange}
          value={value}
          required={required}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      {link && (
        <div className="text-sm flex justify-end mt-2">
          <Link
            href={link.linkUrl}
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            {link.linkText}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Input;
