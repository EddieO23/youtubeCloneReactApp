import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoDetails from '../Components/VideoDetails';
import MiniCard from '../Components/MiniCard';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

function Watch() {
  const { videoId } = useParams();
  console.log(`VIDEO ID, ${videoId}`);

  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`
      );
      console.log(`res`, response.data.items);
      const items = response.data.items

      const videoData=items.map((item) => ({
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
      }))

      setDetails(videoData[0])
      // const item = response.data.item[0];

      // setDetails({
      //   videoId: item.id,
      //   videoTitle: item.snippet.title,
      //   videoThumbnail: item.snippet.thumbnails.standard.url,
      //   videoDuration: item.contentDetails.duration,
      //   videoViews: item.statistics.viewCount,
      //   videoAge: item.snippet.publishedAt,
      //   channelInfo: {
      //     id: item.snippet.channelId,
      //     name: item.snippet.channelTitle,
      //   },
      // });
    } catch (error) {

    }
  };

  useEffect(() => {
    console.log(`details`, details);
  }, [details]);

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className='w-[95%] mx-auto mt-6 mb-12'>
      <div className='row'>
        <div className='col-8'>
          <div className='w-full aspect-[16/9] bg-red-400'></div>
          <VideoDetails />
        </div>
        <div className='col-4 flex flex-col gap-3'>
          {[...Array(12)].map((item, idx) => (
            <MiniCard />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watch;
