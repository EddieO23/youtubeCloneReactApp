import React from 'react';
import ChannelVIdeoCard from './ChannelVIdeoCard';

function ChannelVideoList({channelVideos}) {
  return (
    <div className='row row-cols-4 gap-y-4'>
      {channelVideos &&
      channelVideos.map((item, index) => (
        <ChannelVIdeoCard item={item} key={index} />
      ))}
    </div>
  );
}

export default ChannelVideoList;
