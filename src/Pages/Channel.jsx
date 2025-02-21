import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useChannel } from '../Hooks/useChannel';
import { AiOutlineClose } from 'react-icons/ai';

function Channel() {
  const { channelId } = useParams();
  const { channelInfo, fetchChannelInfo } = useChannel();
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    fetchChannelInfo(channelId);
  }, []);

  return (
    <div className='relative'>
      {showDescription && channelInfo?.description && (
        <div className='absolute flex flex-col gap-2 items-end bg-neutral-800 rounded-xl w-[600px] p-8 left-1/2 top-1/2 transform -translate-x-1/2'>
          <AiOutlineClose
            onClick={() => setShowDescription(false)}
            className=' text-2xl text-neutral-200'
          />
          <p className='text-lg whitespace-pre-line'>
            {channelInfo?.description}
          </p>
        </div>
      )}

      <div className='w-[95%] mx-auto mt-8'>
        <div className='row row-cols-2'>
          {/* image */}
          <div className='col-4'>
            {/* <div className='w-52 aspect-[1/1] rounded-full bg-red-300'></div> */}

            <img
              src={channelInfo?.thumbnail}
              className='w-52 aspect-[1/1] object-cover rounded-full'
              alt='channelThumbnail img'
            />
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
            {channelInfo?.description && (
              <div className=''>
                <p className='w-[600px] line-clamp-3 text-neutral-400 whitespace-pre-line'>
                  {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              placeat deleniti repellendus officia dolorum optio, quibusdam vel,
              rerum eligendi porro doloribus pariatur culpa itaque dolores amet
              delectus molestias velit asperiores. */}
                  {channelInfo?.description}
                </p>
                <button
                  onClick={() => setShowDescription(true)}
                  className='font-semibold'
                >
                  more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;
