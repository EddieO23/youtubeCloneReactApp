// this function returns one array with these properties
export const parseVideos = (items) => {
  return items.map((item) => ({
    videoId: item.id,
    videoTitle: item.snippet.title,
    videoDescription: item.snippet.description,
    videoThumbnail:
      item.snippet.thumbnails.standard.url ||
      item.snippet.thumbnails.default?.url,
    videoDuration: item.contentDetails.duration,
    videoViews: item.statistics.viewCount,
    videoLikes: item.statistics.likeCount,
    videoAge: item.snippet.publishedAt,
    channelInfo: {
      id: item.snippet.channelId,
      image: item.snippet.channelId,
      name: item.snippet.channelTitle,
      subCount: item.statistics.subCount,
    },
  }));
};

export const parseChannelPlaylist = (items) => {
  return items.map((item) => ({
    id: item.id,
    title: item.snippet.title,
    thumbnail:
      item.snippet.thumbnails.high.url || item.snippet.thumbnails.standard.url,
    videoCount: item.contentDetails.itemCount,
  }));
};

export const parseComments = (items) => {
  return items.map((comment) => ({
    commentId: comment.id,
    authorChannelId:
      comment.snippet.topLevelComment.snippet.authorChannelId.value,
    authorProfile:
      comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
    authorName: comment.snippet.topLevelComment.snippet.authorDisplayName,
    commentText: comment.snippet.topLevelComment.snippet.textOriginal,
    commentLikes: comment.snippet.topLevelComment.snippet.likeCount,
    commentRepliesCount: comment.snippet.totalReplyCount,
  }));
};

export const parseReplies = (items) => {
  return items.map((item) => ({
    commentId: item.id,
    authorChannelId: item.snippet.authorChannelId.value,
    authorProfile: item.snippet.authorChannelId.authorProfileImageUrl,
    authorName: item.snippet.authorDisplayName,
    commentText: item.snippet.textOriginal,
    commentLikes: item.snippet.likeCount,
  }));
};

export const parsePlaylistInfo = (item) => ({
  id: item.id,
  title: item.snippet.title,
  description: item.snippet.description,
  thumbnail:
    item.snippet.thumbnails.standard.url || item.snippet.thumbnails.high.url,
})