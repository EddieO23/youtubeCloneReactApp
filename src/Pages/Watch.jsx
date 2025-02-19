import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoDetails from '../Components/VideoDetails';
import MiniCard from '../Components/MiniCard';
import axios from 'axios';
import { fetchVideosWithChannels } from '../utils/videoDetailsHelper';

const API_KEY = import.meta.env.VITE_API_KEY;

function Watch() {
  const { videoId, channelId } = useParams();
  console.log(`VIDEO ID, ${videoId}`);

  const [details, setDetails] = useState({});

  // const fetchDetails = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`
  //     );
  //     console.log(`res`, response.data.items);
  //     const items = response.data.items;

  //     const videoDetails = await fetchVideosWithChannels(items);

  //     setDetails(videoDetails[0]);
  //   } catch (error) {}
  // };

  const fetchDetails = async () => {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`
        );
        console.log('Response:', response.data); // Log response data
        const items = response.data.items;

        if (items.length > 0) {
            const videoDetails = await fetchVideosWithChannels(items);
            setDetails(videoDetails[0]);
        } else {
            console.error('No video details found for the given videoId.');
            setDetails({}); // Set to an empty object if no details are found
        }
    } catch (error) {
        console.error('Error fetching video details:', error); // Log error
        setDetails({}); // Set to an empty object on error
    }
};


 const fetchActivities = async () => {
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/activities?key=${API_KEY}&part=snippet,contentDetails&channelId=${channelId}&maxResults=20`)
    console.log('activities', response)
  } catch (error) {
    
  }
 }
  
  useEffect(() => {
    // console.log(`details`, details);
  }, [details]);

  useEffect(() => {
    fetchDetails();
    fetchActivities()
  }, []);

  return (
    <div className='w-[95%] mx-auto mt-6 mb-12'>
      <div className='row'>
        <div className='col-8'>
          {/* <div className='w-full aspect-[16/9] bg-red-400'></div> preview of video here */}
          <iframe
            className='w-full aspect-[16/9]'
            src={`https://www.youtube.com/embed/${details?.videoId}?autoplay=1`}
            title='Youtube video player'
            allow='autoplay;' // Remove picture-inpicture if not needed
          ></iframe>

          <VideoDetails details={details} />
        </div>
        <div className='col-4 flex flex-col gap-3'>
          {[...Array(12)].map((item, idx) => (
            <MiniCard key={idx}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watch;
