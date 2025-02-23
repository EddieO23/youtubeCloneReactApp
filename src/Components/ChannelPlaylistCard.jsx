import React from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";

function ChannelPlaylistCard() {
  return (
    <div className='col flex flex-col'>
      {/* thumbnail */}
      <div className='relative'>
        <div className='absolute flex gap-2 items-center bottom-2 right-2 bg-[#0c0c0cd0] px-2 py-0.5 rounded '>
          <AiOutlineUnorderedList/>
          <h4>VIDEOS COUNT</h4>
        </div>
        <div className='bg-red-300 object-cover aspect-[16/9] rounded '></div>
        {/* <img
          src={item.videoThumbnail}
          className='bg-red-300 aspect-[16/9] rounded object-cover '
          alt=''
        /> */}
      </div>
      {/* title */}
      <div className='flex flex-col gap-1 mt-1 '>
        <h2 className='text-md line-clamp-1'>PLAYLIST TITLE</h2>
      </div>
    </div>
  );
}

export default ChannelPlaylistCard;
