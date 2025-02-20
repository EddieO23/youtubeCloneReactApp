import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_API_KEY;

function Channel() {
  const { channelId } = useParams();
  const [channelInfo, setChannelInfo] = useState(null);

  const fetchChannelInfo = async () => {
    const channelInfoResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${channelId}`
    );
    console.log('channelResponse', channelInfoResponse);

    const items = channelInfoResponse.data.items;

    const channelInfoData = items.map((item) => ({
      id: item.id,
      thumbnail: item.snippet.thumbnails.high.url,
      title: item.snippet.title,
      customUrl: item.snippet.customUrl,
      description: item.snippet.description,
      subCount: item.statistics.subscriberCount,
      videoCount: item.statistics.videoCount,
    }));
    // console.log('channelInfoData response: ', channelInfoData);
    setChannelInfo(channelInfoData[0]);
  };

  useEffect(() => {
    fetchChannelInfo();
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
