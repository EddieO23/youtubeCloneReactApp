import { React, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function VideoDetails({ details }) {
  const [showDescription, setShowDescription] = useState(false);

  if (!details || !details.channelInfo) {
    return <div>Loading...</div>; // Fallback UI if details or channelInfo are not available
}


  return (
    <div className='flex flex-col gap-2 mt-2 mx-1'>
      {/* <h1 className='text-2xl font-semibold'>{details.videoTitle}</h1> */}
      <h1 className='text-2xl font-semibold'>
        {details?.videoTitle || 'Loading...'}
      </h1>

      <div className='flex justify-between'>
        <div className='flex gap-3 items-center'>
          {/* <img 
            src={details.channelInfo.image} 
            className='w-12 aspect-[1/1] rounded-full' 
            alt={`${details.channelInfo.name} Channel Thumbnail`} // Added descriptive alt text
          /> */}
          <Link to={`/channel/${details?.channelInfo.id}`}>
          <img
            src={details?.channelInfo?.image || 'defaultImage.jpg'}
            className='w-12 aspect-[1/1] rounded-full hover:scale-[108%] duration-200 ease-in-out'
            alt=''
          />
          </Link>
          <div className='flex flex-col text-lg'>
            {/* <h2 className='font-semibold'>{details.channelInfo.name}</h2> */}
            <h2 className='font-semibold'>
              {details?.channelInfo?.name || 'Loading...'}
            </h2>

            <h2>{details?.channelInfo.subCount} subscribers</h2>
          </div>
        </div>
        <div className='flex gap-3 text-lg cursor-pointer'>
          <div className='flex items-center gap-2 bg-neutral-800 px-3 rounded-full'>
            <AiFillLike />
            <span className='h-6 border'></span>
            <span>{details.videoLikes}</span>
          </div>

          <div className='flex items-center gap-2 bg-neutral-800 px-3 rounded-full'>
            <FaShareAlt />
            <span>SHARE</span>
          </div>
        </div>
      </div>

      <div className='text-lg bg-neutral-700 px-3 py-2 rounded-xl'>
        <p
          className={`whitespace-pre-line ${
            showDescription ? `` : `line-clamp-3`
          }`}
        >
          {details.videoDescription}
        </p>
        {!showDescription ? (
          <button onClick={() => setShowDescription(true)}>...more</button>
        ) : (
          <button onClick={() => setShowDescription(false)}>...less</button>
        )}
      </div>
    </div>
  );
}

export default VideoDetails;
