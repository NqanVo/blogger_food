import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-auto lg:min-h-40 bg-red-400 py-3 px-3 md:px-5 lg:px-32 xl:px-40 grid grid-cols-1 lg:grid-cols-2 gap-5 text-white">
      <div className="h-full">
        <h1 className="text-white text-center lg:text-left">About</h1>
        <p className=" text-center lg:text-justify w-auto lg:w-2/3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          delectus adipisci amet illum. Aliquid nobis reprehenderit perspiciatis
          nihil sapiente adipisci explicabo nisi. Sed libero recusandae cum
          illum consequatur odio dolorem?
        </p>
      </div>
      <div className="text-center lg:text-right">
        <h1 className="text-white">Design by</h1>
        <p className="">Vo Nguyen Phuc Ngan</p>
      </div>
    </footer>
  );
};

export default Footer;
