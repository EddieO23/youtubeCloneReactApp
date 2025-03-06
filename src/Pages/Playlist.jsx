import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylistsInfo, getPlaylistVideos } from '../utils/api';
import { AiOutlineClose } from 'react-icons/ai';
import { usePlaylistInfo } from '../Hooks/usePlaylistInfo';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { usePlaylistItems } from '../Hooks/usePlaylistItems';
import PlaylistItems from '../Components/PlaylistItems';

function Playlist() {
  const { channelId, playlistId } = useParams();
  const {
    playlistInfo,
    showDescription,
    fetchPlaylistInfo,
    setShowDescription,
  } = usePlaylistInfo();

const {fetchPlaylistVideos,playlistItems } = usePlaylistItems()

 

  useEffect(() => {
    fetchPlaylistInfo(playlistId);
    fetchPlaylistVideos(playlistId)
  }, []);

  return (
    <div className='relative'>
      {/* PLAYLIST MODAL */}
      {showDescription && playlistInfo?.description && (
        <div className='absolute overflow-hidden bg-neutral-800 rounded-xl left-1/2 top-14 z-[10]transform -translate-x-1/2'>
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

      <div className='w-[90%] mx-auto md:mt-8 mt-4'>
        <div className='row row-cols-2 bg-neutral-900 md:p-5 p-3 rounded-xl'>
          {/* image */}
          <div className='col-md-4 col-12'>
            {/* <div className='aspect-[16/9] mx-auto bg-red-300'></div> */}

            <img
              src={playlistInfo?.thumbnail}
              className='aspect-[16/10] mx-auto object-cover'
              alt='playlistThumbanil img'
            />
          </div>
          {/* details */}
          <div className='col-md-8 col-12 flex flex-col gap-2'>
            {/* <h1 className='text-4xl font-semibold'>{channelInfo?.title}</h1> */}
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-semibold'>{playlistInfo?.title}</h1>
            {/* Description */}

            {playlistInfo?.description && (
              <div className=''>
                <p className=' line-clamp-3 text-neutral-400 whitespace-pre-line'>
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

        <PlaylistItems videos={playlistItems.videos} channelId={channelId}/>
      </div>
    </div>
  );
}

export default Playlist;
