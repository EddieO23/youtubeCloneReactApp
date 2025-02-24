import React from 'react';
import { useParams } from 'react-router-dom';

function Playlist() {
  // const { channelId, playlistId } = useParams();

  return (
    <div className='w-[90%] mx-auto mt-8'>
      <div className='row row-cols-2 bg-neutral-900 p-5 rounded-xl'>
        {/* image */}
        <div className='col-4'>
          <div className='aspect-[16/9] mx-auto bg-red-300'></div>

          {/* <img
            src={channelInfo?.thumbnail}
            className='w-52 aspect-[1/1] object-cover rounded-full'
            alt='channelThumbnail img'
          /> */}
        </div>
        {/* details */}
        <div className='col-8'>
          {/* <h1 className='text-4xl font-semibold'>{channelInfo?.title}</h1> */}
          <h1 className='text-4xl font-semibold'>channel title</h1>
          {/* Description */}
          {/* {channelInfo?.description && ( */}
            <div className=''>
              <p className='w-[600px] line-clamp-3 text-neutral-400 whitespace-pre-line'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              placeat deleniti repellendus officia dolorum optio, quibusdam vel,
              rerum eligendi porro doloribus pariatur culpa itaque dolores amet
              delectus molestias velit asperiores.
                {/* {channelInfo?.description} */}
              </p>
              <button
                // onClick={() => setShowDescription(true)}
                className='font-semibold'
              >
                more
              </button>
            </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
