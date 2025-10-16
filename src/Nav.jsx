import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaTree } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


const Nav = ({menu,setMenu}) => {
  const menuFunc =()=>{
         setMenu(!menu)
  }
  return (
    <div className="w-[100%] h-[80px] border border-none  fixed top-[85px] z-50   flex items-center justify-between  shadow-sm bg-white">
     
      <div className="text-3xl text-green-900 font-bold ml-5 lg:ml-15 text-center flex align-middle">
        <h1 className="flex items-center gap-1">
          <SiLinktree />
          <span className="hidden sm:inline">tebra</span>
        </h1>
      </div>
      <div className="hidden  lg:flex justify-between gap-8 text-xl text-green-900 ">
        <p className="flex flex-row items-center group cursor-pointer transition-all duration-300 hover:bg-red-50 rounded-4xl p-4">
          Product{" "}
          <MdKeyboardArrowDown className="transition-transform duration-300 group-hover:rotate-180" />
        </p>
        <p className="flex flex-row items-center group cursor-pointer transition-all duration-300  hover:bg-red-50 rounded-4xl p-4">
          Pricing
        </p>
        <p className="flex flex-row items-center group cursor-pointer transition-all duration-300 hover:bg-red-50 rounded-4xl p-4">
          Resources{" "}
          <span className="text-sm ml-2 bg-green-100 p-1 rounded-4xl">New</span>{" "}
          <MdKeyboardArrowDown className="transition-transform duration-300 group-hover:rotate-180" />
        </p>
        <p className="flex flex-row items-center group cursor-pointer transition-all duration-300 hover:bg-red-50 rounded-4xl p-4">
          About{" "}
          <MdKeyboardArrowDown className="transition-transform duration-300 group-hover:rotate-180" />
        </p>
      </div>
      <div className="flex pr-6 text-center  lg:mr-15">
        <button className="pr-2 pl-2 pb-3 pt-3  border border-green-900 md:text-xl font-semibold text-green-900 rounded-4xl md:pt-3 md:pr-5 md:pl-4 flex md:pb-2 md:mr-4 hover:bg-green-50">
          Take a tour
        </button>
        <button
          className="ml-2 pr-2 pl-2 border border-none md:text-xl  rounded-4xl pt-3 md:pr-5 md:pl-4 flex pb-3  hover:bg-amber-200"
          style={{ backgroundColor: "#FFA07A	" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#FFDAB9")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#FFA07A")
          }
        >
          Get a demo
        </button>
        <i
  className="lg:hidden sm:flex mt-4 ml-4 text-xl font-bold cursor-pointer relative w-6 h-6"
  onClick={menuFunc}
>
  <span
    className={`absolute top-0 left-0 w-6 h-0.5 bg-green-900 transition-all duration-300 ${
      menu ? "rotate-0 translate-y-0" : "rotate-45 translate-y-2"
    }`}
  />
  <span
    className={`absolute top-2 left-0 w-6 h-0.5 bg-green-900 transition-all duration-300 ${
      menu ? "opacity-100" : "opacity-0"
    }`}
  />
  <span
    className={`absolute top-4 left-0 w-6 h-0.5 bg-green-900 transition-all duration-300 ${
      menu ? "rotate-0 translate-y-0" : "-rotate-45 -translate-y-2"
    }`}
  />
</i>

      </div>
    </div>

    
  );
};

export default Nav;
