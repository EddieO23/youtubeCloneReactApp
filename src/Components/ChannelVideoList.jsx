import React from 'react';
import ChannelVideoCard from './ChannelVideoCard';

function ChannelVideoList({channelVideos}) {
  return (
    <div className='row row-cols-4 gap-y-4'>
      {channelVideos &&
      channelVideos.map((item, index) => (
        <ChannelVideoCard item={item} key={item.videoId} />
      ))}
    </div>
  );
}

export default ChannelVideoList;
