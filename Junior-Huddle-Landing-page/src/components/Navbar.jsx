import React from "react";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="p-6 lg:p-14 w-full flex  justify-between">
      <img
        className="xs:w-[84px] xs:h-[15px] lg:w-[175px] lg:h-[30px]"
        src={logo}
        alt="Logo"
      />
      <p className="text-lighPink border border-lighPink px-4 lg:px-5 py-1 lg:py-2 font-opensans  text-xs  rounded-3xl shadow-md cursor-pointer ">
        Try It Free
      </p>
    </nav>
  );
};

export default Navbar;
