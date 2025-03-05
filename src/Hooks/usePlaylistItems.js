import { useState } from "react"
import { getPlaylistVideos } from "../utils/api"

export const usePlaylistItems = () => {
  const [playlistItems, setPlaylistItems] = useState({videos: [], nextPageToken: null})

 const fetchPlaylistVideos = async (playlistId) => {
    const playlistVideosResponse = await getPlaylistVideos(playlistId)
    
    
    const playlistVideosData = playlistVideosResponse.items.map((item) =>({
      id: item.id,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.standard.url
    }))
    setPlaylistItems(prev =>({
      videos: [...prev.videos, ...playlistVideosData],
      nextPageToken: playlistVideosResponse.nextPageToken
    }) )
  }

  return {playlistItems, fetchPlaylistVideos}
}