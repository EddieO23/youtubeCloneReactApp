import React from 'react';

function MiniCard({item}) {
  return (
    <div className='flex gap-3'>
      <div className='relative min-w-fit'>
        <span className='absolute bottom-1 right-1 bg-[#0c0c0cd0] px-2 py-2 rounded'>{item.videoDuration}</span>
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
  );
}

export default MiniCard;
