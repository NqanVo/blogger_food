import React, { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  let { type, size, handleOnClick, name, disabled = false } = props;

  let makeup;
  switch (type) {
    case "primary":
      makeup = "border-black bg-transparent text-black hover:bg-red-100";
      break;
    case "main":
      makeup = "border-red-400 bg-red-400 text-white";
      break;
    case "icon":
      makeup = "text-black border-none";
      break;
    default:
      makeup = "border-black bg-transparent text-black";
      break;
  }
  if (size === "l") size = "lg:w-full";
  else size = "w-fit";
  return (
    <button
      ref={ref}
      onClick={handleOnClick}
      className={`p-2 md:px-4 md:py-2 border-[1px] md:border-[2px] text-sm lg:text-base text-center flex justify-center items-center font-medium max-h-12 ${size} ${makeup} ${
        disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer"
      }`}
      disabled={disabled}
    >
      {name}
    </button>
  );
});

export default Button;
