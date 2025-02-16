// homeVideoCad.js

const homeVideoCard = {
  videoId: "abc123",
  videoThumbnail: "https://example.com/thumbnail.jpg",
  videoDuration: "10:00",
  videoTitle: "Sample Video Title",
  videoViews: "1,000",
  videoAge: "2 days ago",
  channelInfo: {
      id: "channel123",
      image: "https://example.com/channel-image.jpg", // Optional, can be omitted
      name: "Channel Name"
  }
};

// Alternatively, you can create another example without the image
const homeVideoCardWithoutImage = {
  videoId: "def456",
  videoThumbnail: "https://example.com/thumbnail2.jpg",
  videoDuration: "5:30",
  videoTitle: "Another Video Title",
  videoViews: "500",
  videoAge: "1 week ago",
  channelInfo: {
      id: "channel456",
      // image: "https://example.com/channel-image2.jpg", // Optional, omitted here
      name: "Another Channel Name"
  }
};

export { homeVideoCard, homeVideoCardWithoutImage }; // Export the objects for use in other components
