import React from "react";
import { iconCommunities, iconMessages } from "../assets";
// import  from "../assets";

const Stats = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 justify-center lg:justify-around items-center text-center mb-12 lg:mb-28">
      <div>
        <img className=" " src={iconCommunities} alt="Communities" />
        <p className="text-6xl font-bold mt-4 mb-6">1.4k+</p>
        <p className="text-slate-400">Communities Formed</p>
      </div>

      <div>
        <img className=" " src={iconMessages} alt="Communities" />
        <p className="text-6xl font-bold mt-4 mb-6">2.7m+</p>
        <p className="text-slate-400">Messages Sent</p>
      </div>
    </div>
  );
};

export default Stats;
