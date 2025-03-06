import React from 'react';
import ChannelPlaylistCard from './ChannelPlaylistCard';

function ChannelPlaylist({channelId, channelPlaylists}) {
  return (
    <div className='row row-cols-lg-4 row-cols-md-3 row-cols-2 gap-y-4'>
      {channelPlaylists.map(item => (
        <ChannelPlaylistCard key={item.id} item={item} channelId={channelId} />
      ))}
    </div>
  );
}

export default ChannelPlaylist;
