import React from "react";
import FooterContact from "./FooterContact";
import FooterNews from "./FooterNews";

import { bgFooterTopMobile, bgFooterTopDesktop } from "../assets";

const Footer = () => {
  return (
    <footer className="">
      <img src={bgFooterTopMobile} className="w-full h-auto lg:hidden" alt="" />
      <img
        className="w-full h-auto xs:hidden lg:block"
        src={bgFooterTopDesktop}
        alt=""
      />
      <div className="bg-darkCyan lg:pt-20 px-6 lg:flex lg:flex-row-reverse lg:gap-x-96 lg:px-20 ">
        <FooterNews />
        <FooterContact />
      </div>
    </footer>
  );
};

export default Footer;
