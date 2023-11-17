import React, { ReactNode, type FC } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "text" | "outline";
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  variant,
  children,
  ...restProps
}) => {
  const buttonStyle = {
    outline: "border-2 border-blue-800",
    contained: "bg-blue-800",
    text: "bg-gray-500",
  };

  return (
    <button
      {...restProps}
      className={`${buttonStyle[variant ?? "text"]} ${
        restProps.className
      } px-5 py-1.5 mt-2 w-full rounded-md`}
    >
      {children}
    </button>
  );
};
