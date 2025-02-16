import { useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export const useHome = () => {
  // {
  //   home: {videos: [], nextPageToken: null},
  //   music: {videos: [], nextPageToken: null},
  //   movies: {videos: [], nextPageToken: null},
  // }

  const [homeVideos, setHomeVideos] = useState({
    home: { videos: [], nextPageToken: null },
    music: { videos: [], nextPageToken: null },
    sport: { videos: [], nextPageToken: null },
    gaming: { videos: [], nextPageToken: null },
    movies: { videos: [], nextPageToken: null },
    news: { videos: [], nextPageToken: null },
    fashion: { videos: [], nextPageToken: null },
    course: { videos: [], nextPageToken: null },
  });

const [error, setError] = useState(null)

  const fetchHomeVideos = async (
    filter,
    categoryId = null,
    pageToken = null
  ) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics,contentDetails&chart=mostPopular&${
          categoryId != null ? `videoCategoryId=${categoryId}` : ``
        }&${pageToken != null ? `pageToken=${pageToken}` : ``}&maxResults=20`
      );

      setError(null)

      const videoData = response.data.items.map((item) => {
        return {
          videoId: item.id,
          videoTitle: item.snippet.title,
          videoThumbnail: item.snippet.thumbnails.standard.url,
          videoDuration: item.contentDetails.duration,
          videoViews: item.statistics.viewCount,
          videoAge: item.snippet.publishedAt,
          channelInfo: {
            id: item.snippet.channelId,
            name: item.snippet.channelTitle,
          },
        };
      });

      const channelIds = videoData
        .map((video) => video.channelInfo.id)
        .join(',');

      const channelResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&part=snippet&id=${channelIds}`
      );

      const channelData = {};

      channelResponse.data.items.forEach((channel) => {
        channelData[channel.id] = {
          id: channel.id,
          image: channel.snippet.thumbnails.default.url,
        };
      });

      const videos = videoData.map((video) => ({
        ...video,
        channelInfo: {
          ...video.channelInfo,
          image: channelData[video.channelInfo.id].image,
        },
      }));

      // Update state by merging new videos with existing ones
      // setHomeVideos((prevState) => ({
      //   videos: [...prevState.videos, ...videos], // Append new videos
      //   nextPageToken: response.data.nextPageToken, // Update nextPageToken
      // }));

      setHomeVideos((prevState) => ({
        ...prevState,
        [filter]: {
          videos: [...prevState[filter].videos, ...videos],
          nextPageToken: response.data.nextPageToken,
        },
      }));
    } catch (error) {
      console.error(`Error fetching: ${filter} videos"`, error);
      setError(`Error fetching the ${filter} videos, fetch again later.`)
    }
  };

  return { homeVideos, error, fetchHomeVideos };
};
