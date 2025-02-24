import React from 'react';
import ChannelPlaylistCard from './ChannelPlaylistCard';

function ChannelPlaylist({channelId, channelPlaylists}) {
  return (
    <div className='row row-cols-4 gap-y-4'>
      {channelPlaylists.map(item => (
        <ChannelPlaylistCard key={item.id} item={item} channelId={channelId} />
      ))}
    </div>
  );
}

export default ChannelPlaylist;
