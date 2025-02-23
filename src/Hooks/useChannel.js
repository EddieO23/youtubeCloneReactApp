import { useState } from 'react';
import axios from 'axios';
import {
  getActivities,
  getChannelInfo,
  getActivitiesVideos,
  getChannelPlaylists,
} from '../utils/api';
import { fetchVideosWithChannels } from '../utils/videoDetailsHelper';

const API_KEY = import.meta.env.VITE_API_KEY;

export const useChannel = () => {
  const [category, setCategory] = useState('videos');
  const [channelInfo, setChannelInfo] = useState(null);
  const [channelVideoList, setChannelVideoList] = useState({
    videos: [],
    nextPagetoken: null,
  });
  const [channelPlaylists, setChannelPlaylists] = useState({
    playlists: [],
    nextPagetoken: null,
  });

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

  const fetchChannelData = async (channelId, pageToken) => {
    if (category == 'videos') {
      const channelVideosResponse = await getActivities(channelId, pageToken);
      console.log('channelVideosResponse', channelVideosResponse);

      const videoIds = [];

      channelVideosResponse.items.forEach((item) => {
        if (item.contentDetails.upload) {
          videoIds.push(item.contentDetails.upload.videoId);
        }
        // else if (item.contentDetails.playlistItem) {
        //   videoIds.push(item.contentDetails.playlistItem.resourceId.videoId);
        // }
      });

      const vidResponse = await getActivitiesVideos(videoIds);
      const videosArray = await fetchVideosWithChannels(vidResponse.items);
      setChannelVideoList((prev) => ({
        videos: [...prev.videos, ...videosArray],
        nextPagetoken: channelVideosResponse.nextPagetoken,
      }));

      // console.log(videosArray)
    } else {
      const channelPlaylistResponse = await getChannelPlaylists(channelId);

      const channelPlaylistData = channelPlaylistResponse.items.map((item) => ({
        id: item.id,
        title: item.snippet.title,
        thumbnail:
          item.snippet.thumbnails.high.url ||
          item.snippet.thumbnails.standard.url,
        videoCount: item.contentDetails.itemCount,
      }));

      console.log('channelPlaylistData', channelPlaylistData);
      setChannelPlaylists((prev) => ({
        playlists: [...prev.playlists, ...channelPlaylistData],
        nextPagetoken: channelPlaylistData.nextPagetoken,
      }));
    }
  };

  return {
    category,
    setCategory,
    channelInfo,
    fetchChannelInfo,
    fetchChannelData,
    channelVideoList,
    channelPlaylists
  };
};
