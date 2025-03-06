import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useChannel } from '../Hooks/useChannel';
import { AiOutlineClose } from 'react-icons/ai';
import ChannelVideoList from '../Components/ChannelVideoList';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Components/Loading';
import ChannelPlaylist from '../Components/ChannelPlaylist';
// import { getChannelPlaylists } from '../utils/api'; 

function Channel() {
  const { channelId } = useParams();
  const {category ,setCategory, channelInfo, fetchChannelInfo, channelVideoList, channelPlaylists, fetchChannelData, hasMore } =
    useChannel();
  const [showDescription, setShowDescription] = useState(false);

  const fetchMoreChannelData = () => {
    fetchChannelData(channelId, channelVideoList.nextPageToken);
  };

  useEffect(() => {
    fetchChannelInfo(channelId);
    fetchChannelData(channelId);
    // fetchChannelPlaylists();
  }, [category ]);

  return (
    <div className='relative mb-12'>
      {/* CHANNEL MODAL */}
      {showDescription && channelInfo?.description && (
        <div className='z-[10] absolute overflow-hidden bg-neutral-800 rounded-xl left-1/2 top-14 py-3 transform -translate-x-1/2'>
          <div className=' flex flex-col gap-2 items-end  w-[600px] max-h-[500px] overflow-y-auto p-8 overflow-y-auto'>
            <div className=''>
              <AiOutlineClose
                onClick={() => setShowDescription(false)}
                className=' text-2xl text-neutral-200'
              />
            </div>
            <p className='text-lg whitespace-pre-line'>
              {channelInfo?.description}
            </p>
          </div>
        </div>
      )}

      <InfiniteScroll
        next={() => fetchMoreChannelData()}
        hasMore={hasMore} 
        dataLength={channelVideoList?.videos.length} 
        loader={<Loading />}
      >
        <div className='w-[95%] mx-auto md:mt-8 mt-6'>
          <div className='row row-cols-2'>
            {/* image */}
            <div className='col-4'>
              {/* <div className='w-52 aspect-[1/1] rounded-full bg-red-300'></div> */}

              <img
                src={channelInfo?.thumbnail}
                className='md:w-52 sm:w-40 w-36 aspect-[1/1] object-cover rounded-full'
                alt='channelThumbnail img'
              />
            </div>
            {/* details */}
            <div className='col-8'>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-semibold'>{channelInfo?.title}</h1>
              <div className='sm:flex gap-4 sm:text-lg text-md mt-2 text-neutral-400'>
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

          <div className='sm:my-3 my-1'>
            <button
              onClick={() => setCategory('videos')}
              className={`md:w-44 w-32  sm:text-xl text-lg py-2 font-semibold ${
                category == 'videos' ? 'border-b' : ''
              }`}
            >
              VIDEOS
            </button>
            <button
              onClick={() => setCategory('playlists')}
              className={`md:w-44 w-32 sm:text-xl text-lg py-2 font-semibold ${
                category == 'playlists' ? 'border-b' : ''
              }`}
            >
              PLAYLISTS
            </button>
            <hr className='h-1' />
          </div>
          {category == 'videos' ? (
            <ChannelVideoList channelVideos={channelVideoList.videos} />
          ) : (
            <ChannelPlaylist channelId={channelInfo?.id} channelPlaylists={channelPlaylists.playlists} />
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Channel;
