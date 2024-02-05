import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-[50px] relative flex justify-center">
      <div className=" absolute top-1/2 left-0 w-full h-[1px] bg-black1" />
      <p className="px-[34px] bg-white flex gap-[10px] items-center text-2xl text-black text-center w-fit relative z-[100]">
        <span className="font-semibold">Paypeer</span>
        <span className="w-2 h-2 border-r-4 bg-gray1" />
        <span className="font-regular">All rights reserved 2023</span>
      </p>
    </footer>
  );
};

export default Footer;
