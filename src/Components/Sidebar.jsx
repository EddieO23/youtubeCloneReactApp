import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { FaMusic } from 'react-icons/fa';
import { MdOutlineSportsVolleyball } from 'react-icons/md';
import { TbDeviceGamepad2 } from 'react-icons/tb';
import { BiMoviePlay } from 'react-icons/bi';
import { FaRegNewspaper } from 'react-icons/fa';
import { TbHanger } from 'react-icons/tb';
import { IoSchool } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaYoutube } from 'react-icons/fa';

const mainLinks = [
  {
    icon: <IoMdHome className='text-xl' />,
    name: 'Home',
    filterTag: 'home',
  },
];

const categoriesLinks = [
  {
    icon: <FaMusic className='text-xl' />,
    name: 'Music',
    filterTag: 'music',
  },
  {
    icon: <MdOutlineSportsVolleyball className='text-xl' />,
    name: 'Sports',
    filterTag: 'sports',
  },
  {
    icon: <TbDeviceGamepad2 className='text-xl' />,
    name: 'Gaming',
    filterTag: 'gaming',
  },
  {
    icon: <BiMoviePlay className='text-xl' />,
    name: 'Movies',
    filterTag: 'movies',
  },
  {
    icon: <FaRegNewspaper className='text-xl' />,
    name: 'News',
    filterTag: 'news',
  },
  {
    icon: <TbHanger className='text-xl' />,
    name: 'Fashion',
    filterTag: 'fashion',
  },
  {
    icon: <IoSchool className='text-xl' />,
    name: 'Education',
    filterTag: 'education',
  },
];

function Sidebar() {
  return (
    <div data-bs-toggle='offcanvas' className='w-full h-full text-white bg-[#0c0c0c] '>
      <div className='flex items-center gap-8 w-[85%] mx-auto h-14'>
        <a
          data-bs-toggle='offcanvas'
          href='#offcanvasExample'
          role='button'
          aria-controls='offcanvasExample'
        >
          <RxHamburgerMenu className='text-xl text-white' />
        </a>
        <div className='flex items-center gap-1'>
          <FaYoutube className='text-3xl text-red-600' />
          <span className='text-xl'>YouTube</span>
        </div>
      </div>

      {/* main aka home category */}
      <ul className='border-b-[1px] border-zinc-700'>
        {mainLinks.map(({ icon, name, filterTag }) => 
          <li className='pl-6 py-3 hover:bg-neutral-800' key={name}>
            <h1 className='flex items-center gap-5'>
              {icon}
              <span className='text-sm'>{name}</span>
            </h1>
          </li>
        )}
      </ul>
      {/* rest of categories */}
      <ul className='border-b-[1px] border-zinc-700'>
        {categoriesLinks.map(({ icon, name, filterTag }) => 
          <li className='pl-6 py-3 hover:bg-neutral-800' key={name}>
            <h1 className='flex items-center gap-5'>
              {icon}
              <span className='text-sm'>{name}</span>
            </h1>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
