import { useState } from "react"
import { getPlaylistsInfo } from "../utils/api";
import { parsePlaylistInfo } from "../utils/parseData";

export const usePlaylistInfo = () => {
  const [playlistInfo, setPlaylistInfo] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const fetchPlaylistInfo = async (playlistId) => {
      const playlistInfoResponse = await getPlaylistsInfo(playlistId);
      console.log('playlistInfoResponse', playlistInfoResponse);
  
      const playlistInfoData = parsePlaylistInfo(playlistInfoResponse)

      setPlaylistInfo(playlistInfoData);
      
      console.log('playlistInfoData', playlistInfoData);
    };
    
    return {playlistInfo, showDescription, setShowDescription, fetchPlaylistInfo}

  }