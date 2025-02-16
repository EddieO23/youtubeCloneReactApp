import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';
import { useHome } from '../Hooks/useHome';

function Home({ filter, categoryId }) {
  const { homeVideos, fetchHomeVideos } = useHome();

  useEffect(() => {
    fetchHomeVideos(filter, categoryId, homeVideos.nextPageToken);
  }, [filter, categoryId]);

  useEffect(() => {
    // console.log(homeVideos);
  }, [homeVideos]);

  if (!homeVideos) {
    return <p>Error loading videos.</p>;
  }
  return (
    <div className='row row-cols-3 w-[95%] mx-auto mt-6'>
        <button onClick={() => fetchHomeVideos(filter, categoryId, homeVideos.nextPageToken)}>nextPage</button>
      {homeVideos.videos.map((item) => (
        <Card key={item.videoId} data={item} />
      ))}
    </div>
  );
}

export default Home;
