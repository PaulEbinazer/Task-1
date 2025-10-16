import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";



const SideMenu = ({menu}) => {
  return (
    <div className={`${menu?"hidden":"flex flex-col"} w-full h-screen  z-999 top-[166px] bg-white fixed`}>
        <div className='flex text-center  justify-center items-center  h-[40px] bg-orange-50' >
            <p className='flex text-sm items-center'>Call Sales <FaPhoneAlt className='ml-4 text-green-900'/> <span className='ml-4 text-green-900'>(+91) 9363262391</span>
 </p>
        </div>
        <div className='bg-white space-y-8 pl-5 text-xl pt-5 pr-5 text-green-950 mb-60'>
            <p className='flex justify-between'>Products <IoIosArrowDown />
</p>
            <p className='flex justify-between'>Pricing  <IoIosArrowDown />
</p>
            <p className='flex justify-between'>Resources <IoIosArrowDown />
</p>
            <p className='flex justify-between'>About <IoIosArrowDown />
</p>
        </div>
        <div className='flex text-center  justify-center  
        '>
            <button className='border border-green-950 w-[95%] rounded-4xl pt-2 pb-2 text-xl  hover:bg-green-50
            '>Sign In</button>
        </div>
    </div>
  )
}

export default SideMenu