import { useState } from 'react';
import axios from 'axios';
import { fetchVideosWithChannels } from '../utils/videoDetailsHelper';
import { getHomeVideos } from '../utils/api';

const API_KEY = import.meta.env.VITE_API_KEY;

export const useHome = () => {
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

  const [error, setError] = useState(null);

  const fetchHomeVideos = async (
    filter,
    categoryId = null,
    pageToken = null
  ) => {
    try {
      const response = await getHomeVideos(categoryId, pageToken)
      // console.log(response);
      setError(null);
      
      const videos = await fetchVideosWithChannels(response.items);

      setHomeVideos((prevState) => ({
        ...prevState,
        [filter]: {
          videos: [...prevState[filter].videos, ...videos],
          nextPageToken: response.nextPageToken,
        },
      }));
    } catch (error) {
      console.error(`Error fetching: ${filter} videos"`, error);
      setError(`Error fetching the ${filter} videos, fetch again later.`);
    }
  };

  return { homeVideos, error, fetchHomeVideos };
};
