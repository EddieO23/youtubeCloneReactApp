import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_API_KEY;

function Channel() {
  const { channelId } = useParams();

  const fetchChannelInfo = async () => {
    const channelInfoResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${channelId}`
    );
    console.log('channelResponse', channelInfoResponse);
  };

  useEffect(() => {
    fetchChannelInfo();
  }, []);

  return (
    <div className='w-[95%] mx-auto mt-8'>
      <div className='row row-cols-2'>
        {/* image */}
        <div className='col-4'>
          <div className='w-52 aspect-[1/1] rounded-full bg-red-300'></div>
        </div>
        {/* details */}
        <div className='col-8'>
          <h1 className='text-4xl font-semibold'>Channel Title</h1>
          <div className='flex gap-4 text-lg mt-2 text-neutral-400'>
            <h3>Custom Url</h3>
            <h3>Sub Count</h3>
            <h3>Video Count</h3>
          </div>

          {/* Description */}
          <div className=''>
            <p className='w-[600px] line-clamp-3 text-neutral-400 whitespace-pre-line'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              placeat deleniti repellendus officia dolorum optio, quibusdam vel,
              rerum eligendi porro doloribus pariatur culpa itaque dolores amet
              delectus molestias velit asperiores.
            </p>
            <button className='font-semibold'>more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;
