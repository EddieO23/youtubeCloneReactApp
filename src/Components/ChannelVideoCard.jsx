import React from 'react'

function ChannelVIdeoCard({item}) {
  return (
    <div className='col flex flex-col'>
      {/* thumbnail */}
      <div className='relative'>
        <div className='absolute bottom-2 right-2 bg-[#0c0c0cd0] px-2 py-0.5 rounded '>
          {item.videoDuration}
        </div>
        {/* <div className='bg-red-300 aspect-[16/9] rounded '></div> */}
        <img src={item.videoThumbnail} className='bg-red-300 aspect-[16/9] rounded object-cover ' alt="" />
      </div>
      {/* title */}
      <div className='flex flex-col gap-1 mt-1 '>
        <h3 className='text-md line-clamp-1'>{item.videoTitle}</h3>
        <div className='flex gap-3 text-sm text-gray-400'>
          <h4>{item.videoViews}</h4>
          <h4>{item.videoAge}</h4>
        </div>
      </div>
    </div>
  )
}

export default ChannelVIdeoCard
