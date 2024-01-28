import React from "react";
import { cva } from "class-variance-authority";

const cvaInput = cva("focus:ring-accent focus:border-accent mb-[10px] mt-[10px] border-gray-300",{
  variants: {
    intent: {
      form: "bg-inputBackground text-text h-[30px] mb-[10px] mt-[10px] py-[30px] px-[15px] w-full",
      search: "bg-white text-text h-[30px] py-[30px] px-[15px] w-full",
      checkbox: "bg-accent border-accent text-accent"
    },
  },
});

const CustomInput = ({ placeholder = "", id, type, className, ...props }) => {
  const cvaProps = cvaInput(props);

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`${cvaProps} ${className}`}
      {...props} // Spread rest of the props
    />
  );
};

export default CustomInput;
