import React from 'react';
// import { homeVideoCad } from '../utils/Type';

function Card({data}) {
  return (
    <div className='flex flex-col gap-3 pb-3'>
      {/* THUMBNAIL */}
      <div className='relative'>
        {/* <div className='aspect-[16/9] rounded-xl bg-red-300 '></div> */}
        <img className='aspect-[16/9] object-cover rounded-xl bg-red-300 ' src={data.videoThumbnail} alt="" />
        <span className='absolute bottom-3 right-3 text-sm  bg-[#0c0c0cd0] px-2 py-0.5 rounded'>
          {data.duration}
        </span>
      </div>
      
      {/* DETAILS */}
      <div className='flex gap-2'>
        {/* <div className='bg-red-300 aspect-[1/1] h-12 rounded-full '></div> */}
        <img className='bg-red-300 aspect-[1/1] h-12 rounded-full' src={data.channelInfo.image} alt="" />
        <div className='flex flex-col'>
          <h3 className='text-sm line-clamp-2'>{data.videoTitle}</h3>
          <div className='text-md'>
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
