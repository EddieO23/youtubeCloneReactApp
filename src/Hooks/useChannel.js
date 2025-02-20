import { useState } from 'react';
import axios from 'axios';


const API_KEY = import.meta.env.VITE_API_KEY;

export const useChannel = () => {
  const [channelInfo, setChannelInfo] = useState(null);

  const fetchChannelInfo = async (channelId) => {
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

  return{channelInfo, fetchChannelInfo}
};
