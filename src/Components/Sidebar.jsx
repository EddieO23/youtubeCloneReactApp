import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_API_KEY;



function Sidebar({ filter, setFilter, setCategoryId }) {
const navigate = useNavigate()

  const [categoriesData, setCategoriesData] = useState([]);

  const fetchAndSetCategories = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videoCategories?key=${API_KEY}&part=snippet&regionCode=us`
    );
    // console.log(response);
    setCategoriesData(response.data.items);
  };

  useEffect(() => {
    fetchAndSetCategories();
  }, []);

 

  const mainLinks = [
    {
      icon: <IoMdHome className='text-xl' />,
      name: 'Home',
      filterTag: 'home',
      categoryId: null,
    },
  ];

  const categoriesLinks = [
    {
      icon: <FaMusic className='text-xl' />,
      name: 'Music',
      filterTag: 'music',
      categoryId: categoriesData.find(
        (items) => items.snippet.title === 'Music'
      )?.id,
    },
    {
      icon: <MdOutlineSportsVolleyball className='text-xl' />,
      name: 'Sports',
      filterTag: 'sports',
      categoryId: categoriesData.find(
        (items) => items.snippet.title === 'Sports'
      )?.id,
    },
    {
      icon: <TbDeviceGamepad2 className='text-xl' />,
      name: 'Gaming',
      filterTag: 'gaming',
      categoryId: categoriesData.find(
        (items) => items.snippet.title === 'Gaming'
      )?.id,
    },
    {
      icon: <BiMoviePlay className='text-xl' />,
      name: 'Movies',
      filterTag: 'movies',
      categoryId: categoriesData.find(
        (items) => items.snippet.title === 'Movies'
      )?.id,
    },
    {
      icon: <FaRegNewspaper className='text-xl' />,
      name: 'News',
      filterTag: 'news',
      categoryId: categoriesData.find(
        (items) => items.snippet.title === 'News & Politics'
      )?.id,
    },
    {
      icon: <TbHanger className='text-xl' />,
      name: 'Fashion',
      filterTag: 'fashion',
      categoryId: categoriesData.find(
        (items) => items.snippet.title === 'Howto & Style'
      )?.id,
    },
    {
      icon: <IoSchool className='text-xl' />,
      name: 'Education',
      filterTag: 'education',
      categoryId: categoriesData.find(
        (items) => items.snippet.title === 'Education'
      )?.id,
    },
  ];

  const toggleFilter = (filterTag, categoryId) => {
    setFilter(filterTag);
    setCategoryId(categoryId);
  };

  return (
    <div
      data-bs-toggle='offcanvas'
      className='w-full h-full text-white bg-[#0c0c0c] '
    >
      <div className='flex items-center gap-8 w-[85%] mx-auto h-14'>
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

      {/* main aka home category */}
      <ul className='border-b-[1px] border-zinc-700'>
        {mainLinks.map(({ icon, name, filterTag, categoryId }) => (
          <li
            onClick={() => {toggleFilter(filterTag, categoryId); navigate(`/`)}}
            className={`pl-6 py-3 hover:bg-neutral-800 ${
              filter === filterTag ? 'bg-neutral-800' : ''
            }`}
            key={name}
          >
            <h1 className='flex items-center gap-5'>
              {icon}
              <span className='text-sm'>{name}</span>
            </h1>
          </li>
        ))}
      </ul>
      {/* rest of categories */}
      <ul className='border-b-[1px] border-zinc-700'>
        {categoriesLinks.map(({ icon, name, filterTag, categoryId }) => (
          <li
            onClick={() => toggleFilter(filterTag, categoryId)}
            className={`pl-6 py-3 hover:bg-neutral-800 ${
              filter === filterTag ? 'bg-neutral-800' : ''
            }`}
            key={name}
          >
            <h1 className='flex items-center gap-5'>
              {icon}
              <span className='text-sm'>{name}</span>
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
