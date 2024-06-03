/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactNode, useId } from "react";

interface TextfeildProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  icon?: string;
  validation?:any
}

export const Textfeild: FC<TextfeildProps> = ({
  label,
  validation,
  helperText,
  icon,
  ...restProps
}) => {

    const id=useId()
  return (
    <div className="flex flex-col mt-2">
      {Boolean(label) && <label className="ps-1 " htmlFor={id}>
        {label}
      </label>}
      <div className="flex items-center bg-white  gap-0.5  rounded-md overflow-hidden focus-within:border-2 focus-within:border-blue-600 border-2 border-transparent">
        {Boolean(icon) && <img className="px-0.5" src={icon}alt="" />}
        <input
        
          className="bg-transparent outline-none   p-2 text-sm  border-none  w-full h-full"
          {...restProps}
          id={id}
          {...validation}
        />
      </div>
      {Boolean(helperText) && <p className="text-sm ps-1 mt-0.5 text-red-600">{helperText}</p>}
    </div>
  );
};