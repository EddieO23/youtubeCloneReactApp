import React from 'react';
import { Link } from 'react-router-dom';

function PlaylistItemCard({ item, index, channelId }) {
  return (
    <Link to={`/watch/${item.id}/${channelId}`}>
      <div className='col flex flex-col hover:scale-[103%] duration-750 ease-in-out'>
        <div className='relative'>
          <div className='absolute flex gap-2 items-center top-0 left-0 bg-[#0c0c0cd0] px-2 py-0.5 h-full sm:w-[100px] w-[60px] '>
            <h4 className='text-center w-full text-xl text-neutral-400'>
              {index + 1}
            </h4>
          </div>
          {/* thumbnail */}
          {/* <div className='bg-red-300 object-cover aspect-[16/9] rounded'></div> */}
          <img
            src={item.thumbnail}
            className='bg-red-300 aspect-[16/9] rounded object-cover'
            alt=''
          />
        </div>
        {/* title */}
        <div className='flex flex-col gap-1 mt-1'>
          <h2 className='sm:text-md text-sm line-clamp-1'>{item.title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PlaylistItemCard;
