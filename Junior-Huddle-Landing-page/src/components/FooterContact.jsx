import React from "react";
import "../index.css";

import { footerlogo, iconPhone, iconEmail } from "../assets";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

const FooterContact = () => {
  return (
    <div className="">
      <img className="mb-4" src={footerlogo} alt="" />
      <p className="text-white ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        doloremque, nobis reiciendis fuga veniam deserunt neque officiis maiores
        corrupti eum?
      </p>
      <div className="text-white flex gap-5 mt-10 mb-5 ">
        <img src={iconPhone} alt="" />
        <p> Phone: +1-543-123-4567</p>
      </div>
      <div className="text-white flex gap-5 mt-10  pb-10">
        <img src={iconEmail} alt="" />
        <p> Mail: example@company.com</p>
      </div>
      {/* logo */}
      <div className="pb-10">
        <ul className="flex gap-2 text-white text-3xl">
          <li>
            <a className="ficon " href="#">
              <AiFillFacebook c />
            </a>
          </li>
          <li>
            <a className="ficon" href="#">
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a className="ficon" href="#">
              <AiFillTwitterSquare />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterContact;
