import React from "react";
import { HiSpeakerphone } from "react-icons/hi";

const Top = () => {
  return (
    <div className="w-full h-[65px] bg-green-50 text-center fixed">
      <div className="w-[100%] h-[100%] flex md:text-center justify-center items-center md:align-middle md:gap-2 text-green-900 underline font-light">
        <i>
          <HiSpeakerphone />
        </i>
        <span>Billing revenue calculator </span> |{" "}
        <span>
          <span>Estimate your monthly revenue leaks in 90 seconds </span>
        </span>
      </div>
    </div>
  );
};

export default Top;
