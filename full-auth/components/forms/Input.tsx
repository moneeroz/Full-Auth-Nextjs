import { ChangeEvent, ReactNode } from "react";

interface Props {
  labelId: string;
  type: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  children: ReactNode;
  required?: boolean;
}

const Input = ({
  labelId,
  type,
  handleChange,
  value,
  children,
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
    </div>
  );
};

export default Input;
