import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoDetails from '../Components/VideoDetails';
import MiniCard from '../Components/MiniCard';
import axios from 'axios';
import { fetchVideosWithChannels } from '../utils/videoDetailsHelper';
import Comments from '../Components/Comments';
import {
  getVideoDetails,
  getActivities,
  getActivitiesVideos,
} from '../utils/api';

const API_KEY = import.meta.env.VITE_API_KEY;

function Watch() {
  const { videoId, channelId } = useParams();
  const [activities, setActivities] = useState([]);
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const res = await getVideoDetails(videoId);
      const videoDetails = await fetchVideosWithChannels(res);
      setDetails(videoDetails[0]);
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  const fetchActivities = async () => {
    try {
      const response = await getActivities(channelId);
      const videoIds = [];

      response.items.forEach((item) => {
        if (item.contentDetails.upload) {
          videoIds.push(item.contentDetails.upload.videoId);
        } 
        // else if (item.contentDetails.playlistItem) {
        //   videoIds.push(item.contentDetails.playlistItem.resourceId.videoId);
        // }
      });

      const vidResponse = await getActivitiesVideos(videoIds);
      const videosArray = await fetchVideosWithChannels(vidResponse.items);
      setActivities(videosArray);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  useEffect(() => {
    if (videoId && channelId) {
      fetchDetails();
      fetchActivities();
    }
  }, [videoId, channelId]); // Added check for undefined parameters

  return (
    <div className='w-[95%] mx-auto mt-6 mb-12'>
      <div className='row'>
        <div className='col-xl-8 col-lg-7'>
          {details ? (
            <>
              <iframe
                className='w-full aspect-[16/9]'
                src={`https://www.youtube.com/embed/${details.videoId}?autoplay=1`}
                title='Youtube video player'
                allow='autoplay; fullscreen'
              ></iframe>
              <VideoDetails details={details} />
              <div className="lg:block hidden">
              <Comments videoId={details.videoId} />
              </div>
            </>
          ) : (
            <p>Loading video details...</p> // Graceful loading state
          )}
        </div>
        <div className='col-xl-4 col-lg-5 flex flex-col gap-3 lg:mt-0 mt-3'>
          {activities.map((item, indx) => (
            <MiniCard item={item} key={item.videoId } />
          ))}
        </div>
        <div className="block lg:hidden">
              <Comments videoId={details?.videoId} />
              </div>
      </div>
    </div>
  ); 
}

export default Watch;
