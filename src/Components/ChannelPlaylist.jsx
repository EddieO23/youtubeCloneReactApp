import React from 'react';
import ChannelPlaylistCard from './ChannelPlaylistCard';

function ChannelPlaylist({channelPlaylists}) {
  return (
    <div className='row row-cols-4 gap-y-4'>
      {channelPlaylists.map(item => (
        <ChannelPlaylistCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ChannelPlaylist;
