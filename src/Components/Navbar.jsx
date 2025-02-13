import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <div className='w-full bg-[#0c0c0c]'>
      <div className='flex w-[95%] mx-auto'>
        <div className='flex items-center gap-8'>
          <RxHamburgerMenu className='text-xl ' />
          <div className="flex items-center gap-1">
          <FaYoutube className='text-3xl'/>
          <span className='text-xl'>YouTube</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
