import React from 'react';
import ChannelVIdeoCard from './ChannelVIdeoCard';

function ChannelVideoList() {
  return (
    <div className='row row-cols-4 gap-y-4'>
      {[...Array(12)].map((item, index) => (
        <ChannelVIdeoCard key={index} />
      ))}
    </div>
  );
}

export default ChannelVideoList;
