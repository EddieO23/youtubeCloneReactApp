import React from 'react';
import ChannelPlaylistCard from './ChannelPlaylistCard';

function ChannelPlaylist() {
  return (
    <div className='row row-cols-4 gap-y-4'>
      {[...Array(20)].map((item, index) => (
        <ChannelPlaylistCard />
      ))}
    </div>
  );
}

export default ChannelPlaylist;
