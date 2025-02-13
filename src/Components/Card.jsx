import React from 'react';

function Card() {
  return (
    <div className='flex flex-col gap-3 pb-3'>
      {/* THUMBNAIL */}
      <div className='relative'>
        <div className='aspect-[16/9] rounded-xl bg-red-300 '></div>
        <span className='absolute bottom-3 right-3 text-sm  bg-[#0c0c0cd0] px-2 py-0.5 rounded'>
          Duration
        </span>
      </div>
      {/* DETAILS */}
      <div className='flex gap-2'>
        <div className='bg-red-300 aspect-[1/1] h-12 rounded-full '></div>
        <div className='flex flex-col'>
          <h3 className='text-sm'>VIDEOTITLE</h3>
          <div className='text-md'>
            <h4>CHANNEL NAME</h4>
            <div className='flex gap-1'>
              <span>VIEWS</span>
              <span>.</span>
              <span>VIDEOAGE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
