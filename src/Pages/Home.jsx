import React, { useEffect } from 'react';
import Card from '../Components/Card';
import { useHome } from '../Hooks/useHome';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Components/Loading';

function Home({ filter, categoryId }) {
  const { homeVideos, error, fetchHomeVideos } = useHome();

  useEffect(() => {
    // Fetch initial videos when filter or categoryId changes
    fetchHomeVideos(filter, categoryId, homeVideos[filter].nextPageToken);
  }, [filter, categoryId]);

  useEffect(() => {
    // console.log(homeVideos)
  }, [homeVideos]);

  return (
    <div>
      {/* <Loading/> */}
      {error ? (
        <div className='text-center mt-8 text-xl text-red-500 font-semibold'>{error}</div>
      ) : <InfiniteScroll
      next={() =>
        fetchHomeVideos(filter, categoryId, homeVideos[filter]?.nextPageToken)
      }
      hasMore={homeVideos[filter]?.videos.length > 0} // Ensure this is defined
      dataLength={homeVideos[filter]?.videos.length || 0} // Default to 0 if undefined
      loader={<Loading/>}
    >
      <div className='row row-cols-3 w-[95%] mx-auto mt-6'>
        {homeVideos[filter]?.videos.map((item) => (
          <Card key={item.videoId} data={item} />
        )) || <p>No videos available.</p>}{' '}
        // Fallback message
      </div>
    </InfiniteScroll> }
    </div>
  );
}

export default Home;
