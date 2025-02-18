import { useState } from 'react';
import axios from 'axios';
import { fetchVideosWithChannels } from '../utils/videoDetailsHelper';

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
// console.log(response.data)
      setError(null)

      const videos = await fetchVideosWithChannels(response.data.items)

      


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
