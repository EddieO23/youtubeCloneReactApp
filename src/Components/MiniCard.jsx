import React from 'react';

function MiniCard() {
  return (
    <div className='flex gap-3'>
      <div className='relative'>
        <span className='absolute bottom-1 right-1 bg-[#0c0c0cd0] px-2 py-2 rounded'>duration</span>
        <div className='bg-red-200 w-64 aspect-[16/9] rounded'></div>
      </div>
      <div className=''>
        <h2 className='text-md'>videoTitle</h2>
        <div className='text-sm text-gray-400'>
          <h3>channelName</h3>
          <div className='flex gap-1 items-center'>
            <h3>views</h3>
            <span className='w-[4px] h-[4px] bg-gray-400'></span>
            <h3>age</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
