import React, { forwardRef } from 'react';

const Button = forwardRef((props, ref) => {
    let { type, size, handleOnClick, name } = props

    let makeup
    switch (type) {
        case "primary":
            makeup = "border-black bg-transparent text-black"
            break;
        case "main":
            makeup = "border-red-400 bg-red-400 text-white"
            break;
        case "icon":
            makeup = "text-black border-none"
            break;
        default:
            makeup = "border-black bg-transparent text-black"
            break;
    }
    if (size === "l")
        size = "lg:w-full"
    else
        size = "w-fit"
    return (
        <button
            ref={ref}
            onClick={handleOnClick}
            className={`px-4 py-2 border-[2px] text-sm lg:text-base text-center h-12 flex justify-center items-center font-medium ${size} ${makeup}`}
        >
            {name}
        </button>
    );
});

export default Button;