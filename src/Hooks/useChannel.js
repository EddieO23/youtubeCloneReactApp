import { useState } from 'react';
import axios from 'axios';
import { getChannelInfo } from '../utils/api';


const API_KEY = import.meta.env.VITE_API_KEY;

export const useChannel = () => {
  const [channelInfo, setChannelInfo] = useState(null);

  const fetchChannelInfo = async (channelId) => {
    
    const channelInfoResponse = await getChannelInfo(channelId)

    const channelInfoData = {
      id: channelInfoResponse.id,
      thumbnail: channelInfoResponse.snippet.thumbnails.high.url,
      title: channelInfoResponse.snippet.title,
      customUrl: channelInfoResponse.snippet.customUrl,
      description: channelInfoResponse.snippet.description,
      subCount: channelInfoResponse.statistics.subscriberCount,
      videoCount: channelInfoResponse.statistics.videoCount,
    };
    // console.log('channelInfoData response: ', channelInfoData);
    setChannelInfo(channelInfoData);
  };

  return{channelInfo, fetchChannelInfo}
};
