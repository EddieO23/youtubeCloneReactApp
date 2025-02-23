import axios from 'axios';
import { getChannelInfo } from './api';
import { parseVideos } from './parseData';

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchVideosWithChannels = async (items) => {
  const videoData = parseVideos(items)

  const channelIds = videoData.map((video) => video.channelInfo.id).join(',');

  const channelResponse = await getChannelInfo(channelIds)
  

  const channelData = {};

  channelResponse.forEach((channel) => {
    channelData[channel.id] = {
      image: channel.snippet.thumbnails.default.url,
      subCount: channel.statistics.subscriberCount,
    };
  });

  const videos = videoData.map((video) => ({
    ...video,
    channelInfo: {
      ...video.channelInfo,
      image: channelData[video.channelInfo.id]?.image || null,
      subCount: channelData[video.channelInfo.id]?.subCount || null,
    },
  }));
  
  return videos;
  
};
