import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchVideosWithChannels = async (items) => {
  const videoData = items.map((item) => {
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

  const channelIds = videoData.map((video) => video.channelInfo.id).join(',');

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

  return videos;
};
