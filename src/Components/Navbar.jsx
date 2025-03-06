import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaYoutube } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function Navbar({search, setSearch}) {
const navigate = useNavigate()


const handleKeyPress = (e) => {
if(e.key == "Enter") {
  e.preventDefault()
  if(search.trim()) {
    navigate(`/search?query=${search}`)
  } else {
    navigate(`/`)
  }
}
}
 
  return (
    <div className='sticky z-50 top-0 w-full bg-[#0c0c0c]'>
      <div className='flex justify-between w-[95%] h-14 mx-auto'>
        <div className='flex md:gap-0 gap-2 items-center md:gap-8 gap-3 gap-8 cursor-pointer'>
          <a
            data-bs-toggle='offcanvas'
            href='#offcanvasExample'
            role='button'
            aria-controls='offcanvasExample'
          >
            <RxHamburgerMenu className='sm:text-xl text-lg text-white' />
          </a>
          <div className='flex items-center gap-1' onClick={() => navigate('/')}>
          <FaYoutube className='sm:text-3xl text-3xl text-red-600 cursor-pointer' />
          <span className='sm:text-xl text-lg'>YouTube</span>
        </div>
        </div>

        <div className='flex items-center'>
          <form>
            <div className='flex items-center sm:h-10 h-9 border-[0.6px] border-neutral-700 rounded-full overflow-hidden'>
              <div className='flex items-center sm:pr-5 pr-3'>
                <input
                  value={search}
                  type='text'
                  placeholder='Search'
                  className='md:w-96 w-full px-3 sm:text-lg text-md text-zinc-300 bg-[#0c0c0c] focus:outline-none placeholder-neutral-500'
                  onChange={(e)=>setSearch(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <AiOutlineClose onClick={()=> setSearch("")} className={`text-lg cursor-pointer text-neutral-400 ${!search ? `invisible` : `visible`}`}/>
              </div>
              <button  className='w-16 flex items-center justify-center border-l-[1px] border-neutral-700'>
                <FaSearch className='sm:text-2xl text-xl text-2xl text-neutral-200' />
              </button>
            </div>
          </form>
        </div>

        <div className='lg:block hidden'>
          {/* EMPTY */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
