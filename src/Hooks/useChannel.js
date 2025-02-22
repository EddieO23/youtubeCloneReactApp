import { useState } from 'react';
import axios from 'axios';
import { getActivities, getChannelInfo } from '../utils/api';

const API_KEY = import.meta.env.VITE_API_KEY;

export const useChannel = () => {
  const [channelInfo, setChannelInfo] = useState(null);

  const fetchChannelInfo = async (channelId) => {
    const channelInfoResponse = await getChannelInfo(channelId);

    const channelInfoData = {
      id: channelInfoResponse[0].id,
      thumbnail: channelInfoResponse[0].snippet.thumbnails.high.url,
      title: channelInfoResponse[0].snippet.title,
      customUrl: channelInfoResponse[0].snippet.customUrl,
      description: channelInfoResponse[0].snippet.description,
      subCount: channelInfoResponse[0].statistics.subscriberCount,
      videoCount: channelInfoResponse[0].statistics.videoCount,
    };
    // console.log('channelInfoData response: ', channelInfoData);
    setChannelInfo(channelInfoData);
  };

  const fetchChannelData = async (channelId) => {
    const channelVideosResponse = await getActivities(channelId)
    console.log("channelVideosResponse", channelVideosResponse)
  };

  return { channelInfo, fetchChannelInfo, fetchChannelData};
};
