import React from "react";
import { PiSignIn } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="lg:flex w-full hidden   justify-end text-sm text-green-800 mb-8 fixed top-[65px] bg-white">
      <div className="flex justify-between w-[400px] mr-20 ">
        <p className="flex align-middle items-center justify-center gap-2 hover:underline">
          Sign In <PiSignIn />
        </p>
        <p className="hover:underline">Help center</p>
        <p className="flex align-middle items-center justify-center gap-2 hover:underline">
          Call Sales <FaPhoneAlt /> (+91)-9363262391
        </p>
      </div>
    </div>
  );
};

export default SignIn;
