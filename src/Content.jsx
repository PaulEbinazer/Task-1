import { useEffect, useState } from "react";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Content = () => {
  const images = [
    "https://apanthersfatherbookoneandapanthersfatherbooktwo.files.wordpress.com/2020/08/pexels-photo-326900.jpeg?w=730",
    "https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg",
    "https://png.pngtree.com/png-clipart/20221006/original/pngtree-music-notes-png-image_8660757.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="w-[95%] h-full lg:flex lg:w-1/2  pt-[165px] ">
      <div className="w-[90%] h-full mx-auto mt-10">
        <div className="w-[80%] h-[50px] mx-auto border border-green-200 rounded-4xl text-xs flex justify-between items-center px-4 lg:justify-start">
          <div className="flex items-center gap-2 w-[48%]">
            <img
              src={images[current]}
              alt="leader"
              className="w-8 h-8 rounded-full object-cover"
            />
            <h1 className="text-gray-700 font-medium leading-[1] text-left text-[10px] sm:text-[11px] md:text-[12px] lg:text-base">
              Leader in Medical Practice
              <br />
              Management and Billing
            </h1>
          </div>

          <div className="flex items-center gap-0 w-[48%]">
            <div className="flex -space-x-3">
              <img
                src="https://apanthersfatherbookoneandapanthersfatherbooktwo.files.wordpress.com/2020/08/pexels-photo-326900.jpeg?w=730"
                alt="user1"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://apanthersfatherbookoneandapanthersfatherbooktwo.files.wordpress.com/2020/08/pexels-photo-326900.jpeg?w=730"
                alt="user2"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://apanthersfatherbookoneandapanthersfatherbooktwo.files.wordpress.com/2020/08/pexels-photo-326900.jpeg?w=730"
                alt="user3"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className="ml-4 text-gray-700 font-medium leading-[1] text-left text-[9px] sm:text-[10px] md:text-[11px] lg:text-base">
              Trusted by 150,000
              <br />
              Providers
            </p>
          </div>
        </div>

        <div className="text-center lg:text-start lg:ml-25">
          <h1 className="lg:text-7xl text-5xl text-green-900  mt-10 font-semibold ">
            Run your entire practice with one EHR+ platform
          </h1>
          <p className="mt-12 text-2xl lg:text-3xl text-green-900 font-light">
            Tebra’s EHR+ platform connects care, billing, scheduling, and more.
            Built-in AI speeds up notes, handles reviews, and automates
            repetitive admin work.
          </p>
        </div>
        <div className="text-center mt-10  lg:text-start lg:ml-25">
          <button
            className="border border-none  font-semibold rounded-4xl pt-3 pr-6 pl-6  pb-3  hover:bg-amber-200 mr-6 lg:pt-4 lg:pr-6 lg:pl-6 lg:pb-4 lg:text-xl"
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
          <button className="relative font-semibold lg:text-xl text-green-900 group">
            Explore for free
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-green-900 transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button className="border border-green-900 ml-4 mt-2 p-1 rounded-sm">
            <MdArrowOutward />
          </button>
        </div>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Content;
