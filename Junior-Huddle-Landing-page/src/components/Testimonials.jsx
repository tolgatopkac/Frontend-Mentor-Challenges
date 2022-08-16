import React from "react";

import {
  bgSectionTopDesktop1,
  bgSectionTopDesktop2,
  bgSectionTopMobile1,
  bgSectionTopMobile2,
  bgSectionBottomDesktop1,
  bgSectionBottomDesktop2,
  bgSectionBottomMobile1,
  bgSectionBottomMobile2,
  illFlowingConversation,
  illGrowTogether,
} from "../assets";

const Testimonials = () => {
  return (
    <div>
      {/* grow */}
      <div className="flex flex-col  items-center justify-center  w-full">
        <img
          src={bgSectionTopMobile1}
          alt=""
          className="lg:hidden w-full h-auto "
        />
        <img
          className="xs:hidden lg:block w-full h-auto"
          src={bgSectionTopDesktop1}
          alt=""
        />

        <div className="bg-paleBlue w-full text-center lg:flex lg:flex-row-reverse lg:items-center lg:text-left">
          <img className="px-14 mb-16 lg:w-1/2" src={illGrowTogether} alt="" />
          <div className="lg:px-24">
            <p className="mb-5  font-bold text-2xl">Grow Together</p>
            <p className="px-8 lg:px-0 leading-relaxed pb-10 lg:tracking-wide">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>

        <img
          className="hidden w-full h-auto"
          src={bgSectionBottomMobile1}
          alt=""
        />
        <img
          className="xs:hdden lg:block w-full h-auto"
          src={bgSectionBottomDesktop1}
          alt=""
        />
      </div>

      {/* flowing */}
      <div className="flex flex-col  items-center justify-center  w-full mt-28 lg:mt-44">
        <div className="w-full text-center lg:flex lg:flex-row lg:items-center lg:text-left">
          <img
            className="px-14 mb-16 lg:w-1/2"
            src={illFlowingConversation}
            alt=""
          />
          <div className="lg:px-24">
            <p className="mb-5  font-bold text-2xl">Flowing Conversations</p>
            <p className="px-8 lg:px-0 leading-relaxed pb-10 lg:tracking-wide">
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
        </div>
      </div>

      {/* users */}
      <div className="flex flex-col  items-center justify-center  w-full">
        <img
          src={bgSectionTopMobile1}
          alt=""
          className="lg:hidden w-full h-auto "
        />
        <img
          className="xs:hidden lg:block w-full h-auto"
          src={bgSectionTopDesktop1}
          alt=""
        />

        <div className="bg-paleBlue w-full text-center lg:flex lg:flex-row-reverse lg:items-center lg:text-left">
          <img className="px-14 mb-16 lg:w-1/2" src={illGrowTogether} alt="" />
          <div className="lg:px-24">
            <p className="mb-5  font-bold text-2xl"> Your Users</p>
            <p className="px-8 lg:px-0 leading-relaxed pb-10 lg:tracking-wide">
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </div>

        <img
          className="hidden w-full h-auto"
          src={bgSectionBottomMobile1}
          alt=""
        />
        <img
          className="xs:hdden lg:block w-full h-auto"
          src={bgSectionBottomDesktop1}
          alt=""
        />
      </div>
    </div>
  );
};

export default Testimonials;
