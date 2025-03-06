import React from 'react';
import { Link } from 'react-router-dom';

function Card({ data }) {
  return (
    <div className='flex flex-col gap-3 pb-3 hover:scale-[101%] duration-200 ease-in-out'>
      {/* THUMBNAIL */}
      <div className='relative'>
        <Link to={`/watch/${data.videoId}/${data.channelInfo.id}`}>
          <img
            className='aspect-[16/9] w-full object-cover rounded-xl bg-red-300 '
            src={data.videoThumbnail}
            alt=''
          />
        </Link>
        <span className='absolute sm:bottom-3 bottom-2 sm:right-3 right-2 text-sm  bg-[#0c0c0cd0] px-2 py-0.5 rounded'>
          {data.duration}
        </span>
      </div>

      {/* DETAILS */}
      <div className='flex gap-2'>
        <Link className='md:h-10 h-8 aspect-[1/1] ' to={`/channel/${data.channelInfo.id}`}>
          <img
            className='bg-red-300 h-12 rounded-full hover:scale-[110%] duration-200 ease-in-out object-cover'
            src={data.channelInfo.image}
            alt=''
          />
        </Link>
        <div className='flex flex-col'>
          <h3 className='sm:text-lg text-md line-clamp-2'>{data.videoTitle}</h3>
          <div className='sm:text-md text-sm'>
            <h4>{data.channelInfo.name}</h4>
            <div className='flex gap-1'>
              <span>{data.videoViews}</span>
              <span>.</span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
