import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchVideos } from '../utils/api';

function Search() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const fetchSearchVideos = async () => {
    const searchVideosData = await getSearchVideos(searchQuery);
    console.log(searchVideosData);
  };

  useEffect(() => {
    fetchSearchVideos();
  }, []);

  return <div>{searchQuery}</div>;
}

export default Search;
