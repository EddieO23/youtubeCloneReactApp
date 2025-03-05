import React from 'react'
import PlaylistItemCard from './PlaylistItemCard';

function PlaylistItems({videos}) {
  return (
    <div className='row row-cols-4 gap-y-4 mt-4'>
          {videos.map((item, index, channelId) => {
            return (
              <PlaylistItemCard key={item.id} index={index} item={item} channelId={channelId}/>
            );
          })}
        </div>
  )
}

export default PlaylistItems
