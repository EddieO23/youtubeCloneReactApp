import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useChannel } from '../Hooks/useChannel';

function Channel() {
  const { channelId } = useParams();
  const {channelInfo, fetchChannelInfo} = useChannel()
  

  useEffect(() => {
    fetchChannelInfo(channelId);
  }, []);

  return (
    <div className='w-[95%] mx-auto mt-8'>
      <div className='row row-cols-2'>
        {/* image */}
        <div className='col-4'>
          {/* <div className='w-52 aspect-[1/1] rounded-full bg-red-300'></div> */}
          
           <img src={channelInfo?.thumbnail} className='w-52 aspect-[1/1] object-cover rounded-full' alt="channelThumbnail img" />
        </div>
        {/* details */}
        <div className='col-8'>
          <h1 className='text-4xl font-semibold'>{channelInfo?.title}</h1>
          <div className='flex gap-4 text-lg mt-2 text-neutral-400'>
            <h3>{channelInfo?.customUrl}</h3>
            <h3>{channelInfo?.subCount} Subscribers</h3>
            <h3>{channelInfo?.videoCount} Videos</h3>
          </div>

          {/* Description */}
          <div className=''>
            <p className='w-[600px] line-clamp-3 text-neutral-400 whitespace-pre-line'>
              {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              placeat deleniti repellendus officia dolorum optio, quibusdam vel,
              rerum eligendi porro doloribus pariatur culpa itaque dolores amet
              delectus molestias velit asperiores. */}
              {channelInfo?.description}
            </p>
            <button className='font-semibold'>more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;
