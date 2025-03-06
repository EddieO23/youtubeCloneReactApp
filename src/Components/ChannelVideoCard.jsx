import React from 'react'
import { Link } from 'react-router-dom'

function ChannelVideoCard({item}) {
  return (
    <Link to={`/watch/${item.videoId}/${item.channelInfo.id}`}>
    <div className='col flex flex-col hover:scale-[101%] duration-200 ease-in-out'>
      {/* thumbnail */}
      <div className='relative'>
        <div className='absolute sm:bottom-2 bottom-1 sm:right-2 right-1 sm:text-sm text-[12px] bg-[#0c0c0cd0] px-2 py-0.5 rounded '>
          {item.videoDuration}
        </div>
        {/* <div className='bg-red-300 aspect-[16/9] rounded '></div> */}
        <img src={item.videoThumbnail} className='bg-red-300 aspect-[16/9] rounded object-cover ' alt="" />
      </div>
      {/* title */}
      <div className='flex flex-col gap-1 mt-1 '>
        <h2 className='text-md line-clamp-1'>{item.videoTitle}</h2>
        <div className='sm:flex gap-3 text-sm text-gray-400'>
          <h3>{item.videoViews}</h3>
          <h3>{item.videoAge}</h3>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ChannelVideoCard
