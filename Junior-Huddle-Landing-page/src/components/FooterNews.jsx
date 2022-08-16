import React from "react";

const FooterNews = () => {
  return (
    <div className="text-white mb-36">
      <p className="uppercase  font-bold font-opensans tracking-wide lg:mb-5">
        Newsletter
      </p>
      <p className="mb-6 lg:mb-11">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eaque iste
        odio unde aperiam enim porro at doloribus, deleniti modi. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Mollitia, sint?
      </p>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-start ">
        <input
          className="h-10 rounded-lg w-full lg:mr-7"
          type="text"
          name="name"
        />

        <input
          className="mt-4 lg:mt-0 px-8 py-3 bg-pink hover:bg-lighPink cursor-pointer inline rounded-md w-36 place-self-end"
          type="Submit"
          value="Subscribe"
        />
      </div>
    </div>
  );
};

export default FooterNews;
