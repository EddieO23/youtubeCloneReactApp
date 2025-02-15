import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';
// import { homeVideoCad } from '../utils/Type';
import { useHome } from '../Hooks/useHome';

function Home({ categoryId, filter }) {
  const { homeVideos, fetchHomeVideos } = useHome();

  useEffect(() => {
    fetchHomeVideos(filter, categoryId);
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
