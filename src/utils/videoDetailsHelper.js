import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchVideosWithChannels = async (items) => {
  const videoData = items.map((item) => {
    return {
      videoId: item.id,
      videoTitle: item.snippet.title,
      videoDescription: item.snippet.description,
      videoThumbnail: item.snippet.thumbnails.standard.url,
      videoDuration: item.contentDetails.duration,
      videoViews: item.statistics.viewCount,
      videoLikes: item.statistics.likeCount,
      videoAge: item.snippet.publishedAt,
      channelInfo: {
        id: item.snippet.channelId,
        image: item.snippet.channelId,
        name: item.snippet.channelTitle,
        subCount: item.statistics.subCount
      },
    };
  });

  const channelIds = videoData.map((video) => video.channelInfo.id).join(',');

  const channelResponse = await axios.get(
    `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&part=snippet,statistics&id=${channelIds}`
  );
  console.log(channelResponse);

  const channelData = {};

  channelResponse.data.items.forEach((channel) => {
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
  console.log(`Check`, videos);
  
  return videos;
  
};
