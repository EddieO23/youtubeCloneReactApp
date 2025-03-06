import React from 'react';
import ChannelVideoCard from './ChannelVideoCard';

function ChannelVideoList({channelVideos}) {
  return (
    <div className='row row-cols-lg-4 row-cols-md-3 row-cols-2 gap-y-4'>
      {channelVideos &&
      channelVideos.map((item, index) => (
        <ChannelVideoCard item={item} key={index} />
      ))}
    </div>
  );
}

export default ChannelVideoList;
