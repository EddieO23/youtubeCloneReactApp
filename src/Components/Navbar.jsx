import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaYoutube } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function Navbar() {
const navigate = useNavigate()
const [search, setSearch] = useState("")


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
    <div className='w-full bg-[#0c0c0c]'>
      <div className='flex justify-between w-[95%] h-14 mx-auto'>
        <div className='flex items-center gap-8'>
          <a
            data-bs-toggle='offcanvas'
            href='#offcanvasExample'
            role='button'
            aria-controls='offcanvasExample'
          >
            <RxHamburgerMenu className='text-xl text-white' />
          </a>
          <div className='flex items-center gap-1' onClick={() => navigate('/')}>
          <FaYoutube className='text-3xl text-red-600' />
          <span className='text-xl'>YouTube</span>
        </div>
        </div>

        <div className='flex items-center'>
          <form>
            <div className='flex items-center h-10 border-[0.6px] border-neutral-700 rounded-full overflow-hidden'>
              <div className='flex items-center pr-5'>
                <input
                  type='text'
                  placeholder='Search'
                  className='w-96 px-3 text-lg text-zinc-300 bg-[#0c0c0c] focus:outline-none placeholder-neutral-500'
                  onChange={(e)=>setSearch(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <AiOutlineClose className='text-lg cursor-pointer text-neutral-400' />
              </div>
              <button className='w-16 flex items-center justify-center border-l-[1px] border-neutral-700'>
                <FaSearch className='text-2xl text-neutral-200 ' />
              </button>
            </div>
          </form>
        </div>

        <div className=''>{/* EMPTY */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
