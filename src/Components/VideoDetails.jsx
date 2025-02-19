// import {React, useState} from 'react';
// import { AiFillLike } from 'react-icons/ai';
// import { FaShareAlt } from 'react-icons/fa';

// function VideoDetails({details}) {
//   const [showDescription, setShowDescription] = useState(false)

//   return (
//     <div className='flex flex-col gap-2 mt-2 mx-1'>
//       {/* videoTitle */}
//       <h1 className='text-2xl font-semibold'>{details?.videoTitle}</h1>
//       {/* channelThumbnail, channelName, likes, shareButton */}

//       <div className='flex justify-between'>
//         {/* CHANNEL INFO */}
//         <div className='flex gap-3 items-center'>
//          {/* <div className="w-12 aspect-[1/1] rounded-full bg-red-400"></div> */}
//           <img src={details?.channelInfo.image} className='w-12 aspect-[1/1] rounded-full' alt="" />
//           <div className='flex flex-col text-lg  '>
//             <h2 className='font-semibold'>{details?.channelInfo.name}</h2>
//             {/* <h2 className='font-semibold'>Channel Name</h2> */}
//             <h2>{details?.channelInfo.subCount}</h2>
//             {/* <h2>SUB COUNT</h2> */}
//           </div>
//         </div>
//         {/* btn */}
//         <div className='flex gap-3  text-lg cursor-pointer'>
//           <div className='flex items-center gap-2 bg-neutral-800 px-3 rounded-full'>
//             <AiFillLike />
//             <span className='h-6 border'></span>
//             <span>{details?.videoLikes}</span>
//             {/* <span>VIDEO LIKES</span> */}
//           </div>

//           <div className='flex items-center gap-2 bg-neutral-800 px-3 rounded-full'>
//             <FaShareAlt />
//             <span>SHARE</span>
//           </div>
//         </div>
//       </div>
//       {/* DESCRIPTION */}
//       <div className='text-lg bg-neutral-700 px-3 py-2 rounded-xl'>
//         <p className={`whitespace-pre-line ${showDescription ? `` : `line-clamp-3`}`}>
//           {details?.videoDescription}
//           {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempore deleniti voluptatum eaque qui maxime laborum voluptas adipisci ea illo voluptate inventore dolorum ipsa quaerat, ipsam voluptatibus? Quidem sit dolores non mollitia repellendus, laboriosam molestias iure repellat quasi omnis eius veniam maiores aliquam cum animi facere aliquid soluta placeat nobis! */}
//         </p>
//         {!showDescription ?
//         <button onClick={() => setShowDescription(true)}>...more</button>
//         :
//         <button onClick={() => setShowDescription(false)}>...less</button>
//         }
//       </div>
//     </div>
//   );
// }

// export default VideoDetails;

import { React, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaShareAlt } from 'react-icons/fa';

function VideoDetails({ details }) {
  const [showDescription, setShowDescription] = useState(false);

  if (!details) {
    return <div>Loading...</div>; // Fallback UI if details are not available
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
          <img
            src={details?.channelInfo?.image || 'defaultImage.jpg'}
            className='w-12 aspect-[1/1] rounded-full'
            alt=''
          />
          <div className='flex flex-col text-lg'>
            {/* <h2 className='font-semibold'>{details.channelInfo.name}</h2> */}
            <h2 className='font-semibold'>
              {details?.channelInfo?.name || 'Loading...'}
            </h2>

            <h2>{details?.channelInfo?.subCount}</h2>
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
