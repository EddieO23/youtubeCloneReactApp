import React from 'react'

function ChannelVIdeoCard() {
  return (
    <div className='col flex flex-col'>
      {/* thumbnail */}
      <div className='relative'>
        <div className='absolute bottom-2 right-2 bg-[#0c0c0cd0] px-2 py-0.5 rounded '>
          Duration
        </div>
        <div className='bg-red-300 aspect-[16/9] rounded '></div>
      </div>
      {/* title */}
      <div className='flex flex-col gap-1 mt-1 '>
        <h2 className='text-md line-clamp-1'>Video Title</h2>
        <div className='flex gap-3 text-sm text-gray-400'>
          <h3>video views</h3>
          <h3>video age</h3>
        </div>
      </div>
    </div>
  )
}

export default ChannelVIdeoCard
