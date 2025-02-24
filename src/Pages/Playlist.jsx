import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylistsInfo } from '../utils/api';
import { AiOutlineClose } from 'react-icons/ai';

function Playlist() {
  const { channelId, playlistId } = useParams();
  const [playlistInfo, setPlaylistInfo] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const fetchPlaylistInfo = async () => {
    const playlistInfoResponse = await getPlaylistsInfo(playlistId);
    console.log('playlistInfoResponse', playlistInfoResponse);

    const playlistInfoData = {
      id: playlistInfoResponse.id,
      title: playlistInfoResponse.snippet.title,
      description: playlistInfoResponse.snippet.description,
      thumbnail:
        playlistInfoResponse.snippet.thumbnails.standard.url ||
        playlistInfoResponse.snippet.thumbnails.high.url,
    };
    setPlaylistInfo(playlistInfoData);
    console.log('playlistInfoData', playlistInfoData);
  };

  useEffect(() => {
    fetchPlaylistInfo();
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
      </div>
    </div> 
  );
}

export default Playlist;
