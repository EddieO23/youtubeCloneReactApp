import React from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";

function ChannelPlaylistCard({item}) {
  return (
    <div className='col flex flex-col'>
      <div className='relative'>
        <div className='absolute flex gap-2 items-center bottom-2 right-2 bg-[#0c0c0cd0] px-2 py-0.5 rounded '>
          <AiOutlineUnorderedList/>
          <h4>{item.videoCount} videos</h4>
        </div>
      {/* thumbnail */}
        {/* <div className='bg-red-300 object-cover aspect-[16/9] rounded '></div> */}
        <img src={item.thumbnail} className='bg-red-300 aspect-[16/9] rounded object-cover' alt=''/>
      </div>
      {/* title */}
      <div className='flex flex-col gap-1 mt-1 '>
        <h2 className='text-md line-clamp-1'>{item.title}</h2>
      </div>
    </div>
  );
}

export default ChannelPlaylistCard;
