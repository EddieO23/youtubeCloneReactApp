import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActivitiesVideos, getSearchVideos } from '../utils/api';
import { fetchVideosWithChannels } from '../utils/videoDetailsHelper';
import Card from '../Components/Card';

function Search({setSearch}) {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [searchList, setSearchList] = useState([] || null); // Initialize as empty array

  const fetchSearchVideos = async () => {
    const searchVideosData = await getSearchVideos(searchQuery);
    console.log(searchVideosData);

    const videoIds = [];

    searchVideosData.items.forEach((item) => {
      if (item.id.videoId) {
        videoIds.push(item.id.videoId);
      }
    });

    const videoData = await getActivitiesVideos(videoIds);
    const videosArray = await fetchVideosWithChannels(videoData.items);
    console.log("videoData", videoData);

    setSearchList(videosArray);
  };

  useEffect(() => {
    if (searchQuery) {
      setSearchList([]);
      fetchSearchVideos();
    } 
    return ()=>{
      setSearchList([]);
      setSearch("")
    }
  }, [searchQuery]);

  return (
    <div className='row row-cols-3 w-[95%] mx-auto mt-6'>
      {searchList.map((item) => (
        <Card key={item.id} data={item} /> 
      ))}
    </div>
  );
}

export default Search;
