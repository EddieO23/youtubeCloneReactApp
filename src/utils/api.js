import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube';

export const getHomeVideos = async (categoryId, pageToken) => {
  const url = (`${BASE_URL}/v3/videos?key=${API_KEY}&part=snippet,statistics,contentDetails&chart=mostPopular&${
      categoryId != null ? `videoCategoryId=${categoryId}` : ``
    }&${pageToken != null ? `pageToken=${pageToken}` : ``}&maxResults=20`)
    
  const response = await axios.get(url);

  return response.data
};

export const getVideoComments = async (videoId,pageToken) => {
  const url = `${BASE_URL}/v3/commentThreads?key=${API_KEY}&part=snippet,replies&videoId=${videoId}${pageToken ? `&pageToken=${pageToken}` : ``}`

  const response = await axios.get(url)
  return response.data
}

export const getCommentReplies = async (commentId ) => {
  const url = `${BASE_URL}/v3/comments?key=${API_KEY}&part=snippet&parentId=${commentId}`
  const response = await axios.get(url)
  return response.data.items
}

export const getChannelInfo = async (channelId) => {
  const url = `${BASE_URL}/v3/channels?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${channelId}`;
  const response = await await axios.get(url);

  return response.data.items[0];
};
