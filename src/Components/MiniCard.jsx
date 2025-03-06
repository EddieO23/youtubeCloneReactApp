import React from 'react';
import { Link } from 'react-router-dom';

function MiniCard({item}) {
  return (
    <Link to={`/watch/${item.videoId}/${item.channelInfo.id}`} >
    <div className='flex gap-3 hover:scale-[101%] duration-200 ease-in-out'>
      <div className='relative min-w-fit'>
        <span className='sm:text-md text-sm absolute bottom-1 right-1 bg-[#0c0c0cd0] px-2 py-2 rounded'>{item.videoDuration}</span>
        {/* <div className='bg-red-200 w-64 aspect-[16/9] rounded'></div> */}
        <img src={item.videoThumbnail} className='w-40 aspect-[16/9] object-cover rounded' alt="videoThumbnail" />
      </div>
      <div className=''>
        <h2 className='text-md'>{item.videoTitle}</h2>
        <div className='text-sm text-gray-400'>
          <h3>{item.channelInfo.name}</h3>
          <div className='flex gap-1 items-center'>
            <h3>{item.videoViews}</h3>
            <span className='w-[4px] h-[4px] bg-gray-400'></span>
            <h3>{item.videoAge}</h3>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default MiniCard;
