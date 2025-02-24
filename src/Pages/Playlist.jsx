import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylistsInfo } from '../utils/api';
import { AiOutlineClose } from 'react-icons/ai';
import { usePlaylistInfo } from '../Hooks/usePlaylistInfo';
import { AiOutlineUnorderedList } from 'react-icons/ai';

function Playlist() {
  const { channelId, playlistId } = useParams();
  const {
    playlistInfo,
    showDescription,
    fetchPlaylistInfo,
    setShowDescription,
  } = usePlaylistInfo();

  useEffect(() => {
    fetchPlaylistInfo(playlistId);
  }, []);

  return (
    <div className='relative'>
      {/* PLAYLIST MODAL */}
      {showDescription && playlistInfo?.description && (
        <div className='absolute overflow-hidden bg-neutral-800 rounded-xl left-1/2 top-1/2 transform -translate-x-1/2'>
          <div className=' flex flex-col gap-2 items-end  w-[600px] max-h-[500px] overflow-y-auto p-8 overflow-y-auto'>
            <div className=''>
              <AiOutlineClose
                onClick={() => setShowDescription(false)}
                className=' text-2xl text-neutral-200'
              />
            </div>
            <p className='text-lg whitespace-pre-line'>
              {playlistInfo?.description}
            </p>
          </div>
        </div>
      )}

      <div className='w-[90%] mx-auto mt-8'>
        <div className='row row-cols-2 bg-neutral-900 p-5 rounded-xl'>
          {/* image */}
          <div className='col-4'>
            {/* <div className='aspect-[16/9] mx-auto bg-red-300'></div> */}

            <img
              src={playlistInfo?.thumbnail}
              className='aspect-[16/10] mx-auto object-cover'
              alt='playlistThumbanil img'
            />
          </div>
          {/* details */}
          <div className='col-8 flex flex-col gap-2'>
            {/* <h1 className='text-4xl font-semibold'>{channelInfo?.title}</h1> */}
            <h1 className='text-4xl font-semibold'>{playlistInfo?.title}</h1>
            {/* Description */}

            {playlistInfo?.description && (
              <div className=''>
                <p className='w-[600px] line-clamp-3 text-neutral-400 whitespace-pre-line'>
                  {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              placeat deleniti repellendus officia dolorum optio, quibusdam vel,
              rerum eligendi porro doloribus pariatur culpa itaque dolores amet
              delectus molestias velit asperiores.  */}
                  {playlistInfo?.description}
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

        <div className='row row-cols-4 gap-y-2 mt-4'>
          {[...Array(12)].map((item, index) => {
            return (
              <div className='col flex flex-col' key={index}>
                <div className='relative'>
                  <div className='absolute flex gap-2 items-center top-0 left-0 bg-[#0c0c0cd0] px-2 py-0.5 h-full w-[100px] '>
                    <h4 className='text-center w-full'>1</h4>
                  </div>
                  {/* thumbnail */}
                  <div className='bg-red-300 object-cover aspect-[16/9] rounded'></div>
                  {/* <img
          src={item.thumbnail}
          className='bg-red-300 aspect-[16/9] rounded object-cover'
          alt=''
        /> */}
                </div>
                {/* title */}
                <div className='flex flex-col gap-1 mt-1'>
                  <h2 className='text-md line-clamp-1'>Title</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
