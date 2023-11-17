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
      <div className="flex items-center bg-white ps-1  border-2 border-transparent hover:border-blue-700 rounded-md  ">
        {Boolean(icon) && <img src={icon}alt="" />}
        <input
          
          className="bg-transparent outline-none  rounded-md px-1 text-sm py-2 border-none  w-full"
          {...restProps}
          {...validation}
          id={id}
        />
      </div>
      {Boolean(helperText) && <p className="text-sm ps-1 mt-0.5 text-red-600">{helperText}</p>}
    </div>
  );
};
