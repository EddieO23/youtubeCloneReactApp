import { useState } from 'react';
import axios from 'axios';
import {
  getActivities,
  getChannelInfo,
  getActivitiesVideos,
} from '../utils/api';
import {fetchVideosWithChannels} from "../utils/videoDetailsHelper"

const API_KEY = import.meta.env.VITE_API_KEY;

export const useChannel = () => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [channelVideoList, setChannelVideoList] = useState();

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
    const channelVideosResponse = await getActivities(channelId);
    // console.log('channelVideosResponse', channelVideosResponse);

    const videoIds = [];

    channelVideosResponse.forEach((item) => {
      if (item.contentDetails.upload) {
        videoIds.push(item.contentDetails.upload.videoId);
      } else if (item.contentDetails.playlistItem) {
        videoIds.push(item.contentDetails.playlistItem.resourceId.videoId);
      }
    });

    const vidResponse = await getActivitiesVideos(videoIds);
    const videosArray = await fetchVideosWithChannels(vidResponse.items);
    setChannelVideoList(videosArray);
    // console.log(videosArray)
  };

  return { channelInfo, fetchChannelInfo, fetchChannelData, channelVideoList };
};
