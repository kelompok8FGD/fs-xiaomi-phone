import React from "react";
import { cva } from "class-variance-authority";

const cvaLabel = cva("focus:ring-accent focus:border-accent mb-[10px] mt-[10px] border-gray-300", {
  variants: {
    intent: { //use any styles you need, will be used for address form
      form: "text-gray-800 h-[30px] mb-[10px] mt-[10px] py-[30px] px-[15px] w-full",
      checkbox: "text-[13px] text-[#999]"
    },
  },
});

const CustomLabel = ({ text, id, className, ...props }) => {
  const cvaProps = cvaLabel(props);

  return (
    <label
      id={id}
      className={`${cvaProps} ${className}`}
      {...props} // Spread rest of the props
    >
      {text}
    </label>
  );
};

export default CustomLabel;
