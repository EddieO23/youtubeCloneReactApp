export const parseChannelPlaylists = (items) => {
  return items.map((item) => ({
    id: item.id,
    title: item.snippet.title,
    thumbnail:
      item.snippet.thumbnails.high.url || item.snippet.thumbnails.standard.url,
    videoCount: item.contentDetails.itemCount,
  }));
};

// This function is returning one array with these properties