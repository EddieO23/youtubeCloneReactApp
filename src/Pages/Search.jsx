// import React, { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { getActivitiesVideos, getSearchVideos } from '../utils/api';
// import {fetchVideosWithsChannels} from '../utils/videoDetailsHelper'
// import Card from '../Components/Card'

// function Search() {
//   const [searchParams] = useSearchParams();
//   const searchQuery = searchParams.get('query');
//   const [searchList, setSearchList] = useState()
 
//   const fetchSearchVideos = async () => {
//     const searchVideosData = await getSearchVideos(searchQuery);
//     console.log(searchVideosData);

//     const videoIds = []

//     searchVideosData.items.forEach((item) => {
//       if(item.id.videoId) {
//         videoIds.push(item.id.videoId)
//       }
//     })
//     const videoData = await getActivitiesVideos(videoIds)
//     const videosArray = await fetchVideosWithChannels(videoData.items)
//     console.log("videoData", videoData);

//     setSearchList(videosArray)
//   };

//   useEffect(() => {
//     fetchSearchVideos();
//   }, []);

//   return <div>{
//     searchList.map((item) => 
//     <Card data={item} />
//     )
//     }</div>;
// }

// export default Search;


import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActivitiesVideos, getSearchVideos } from '../utils/api';
import { fetchVideosWithChannels } from '../utils/videoDetailsHelper';
import Card from '../Components/Card';

function Search() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [searchList, setSearchList] = useState([]); // Initialize as empty array

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
    fetchSearchVideos();
  }, [searchQuery]); // Add searchQuery as a dependency

  return (
    <div>
      {searchList.map((item) => (
        <Card key={item.id} data={item} /> // Add a key prop for list items
      ))}
    </div>
  );
}

export default Search;
