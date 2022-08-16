import React from "react";
import { screenMockups } from "../assets";

const Hero = () => {
  return (
    <div className="w-full p-6 mt-28 flex items-center flex-col text-center ">
      <h1 className="xs:max-w-[230px] lg:max-w-none  lg:px-40 font-poppins text-xl lg:text-[42px] mb-8 lg:mb-10">
        Build The Community Your Fans Will Love
      </h1>
      <p className="max-w-[260px] lg:max-w-md mb-11 font-opensans text-xs lg:text-[14px]">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <p className="mb-24 font-opensans text-sm text-white bg-pink py-3 lg:py-6 px-8 lg:px-16 rounded-full shadow-2xl drop-shadow-lg hover:bg-lighPink cursor-pointer">
        Get Started For Free
      </p>
      <img className="px-2 mb-28" src={screenMockups} alt="Screen Mockups" />
    </div>
  );
};

export default Hero;
