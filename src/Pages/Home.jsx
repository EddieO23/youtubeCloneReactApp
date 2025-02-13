import React, { useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY




function Home() {
const fetchHomeVideos = async () => {
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&chart=mostPopular&maxResults=20`)
  console.log(response)
}

useEffect(() => {
  fetchHomeVideos()
}, [])
 
  return (
    <div className='row row-cols-3 w-[95%] mx-auto mt-6'>
      {[...Array(12)].map(item => 
      <Card/>
      )}
    </div>
  )
}

export default Home
 