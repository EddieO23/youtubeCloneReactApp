import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';
// import { homeVideoCad } from '../utils/Type';

const API_KEY = import.meta.env.VITE_API_KEY;

function Home({categoryId, filter}) {
  const [homeVideos, setHomeVideos] = useState([]);

  const fetchHomeVideos = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics,contentDetails&chart=mostPopular&${categoryId != null ? `videoCategoryId=${categoryId}` : ``}&maxResults=20`
      );
      console.log(response.data);

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

      // console.log(channelResponse);

      const channelData = {};

      channelResponse.data.items.forEach((channel) => {
        channelData[channel.id] = {
          id: channel.id,
          image: channel.snippet.thumbnails.default.url,
        };
      });

      // console.log(channelData);

      const videos = videoData.map((video) => ({
        ...video,
        channelInfo: {
          ...video.channelInfo,
          image: channelData[video.channelInfo.id].image,
        },
      }));

      setHomeVideos(videos);
    } catch (error) {
      console.error(`Error fetching: ${filter} videos"`, error);
    }
  };

  useEffect(() => {
    fetchHomeVideos();
  }, [categoryId]);

  useEffect(() => {
    // console.log(homeVideos);
  }, [homeVideos]);

  return (
    <div className='row row-cols-3 w-[95%] mx-auto mt-6'>
      {homeVideos?.map((item) => (
        <Card key={item.videoId} data={item} />
      ))}
    </div>
  );
}

export default Home;
