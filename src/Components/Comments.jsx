import React, { useEffect } from 'react';
import CommentBody from './CommentBody';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
// console.log(API_KEY)

function Comments({ videoId }) {
  
  // My version
  
  const fetchComments = async () => {
    const commentsResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&part=snippet,replies&videoId=${videoId}`
    );
    console.log(commentsResponse.data.items);
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  // AI version

//   const fetchComments = async () => {
//     try {
//       const commentsResponse = await axios.get(
//         `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&part=snippet,replies&videoId=${videoId}`
//       );
//       console.log("Comments fetched successfully:", commentsResponse.data);
//     } catch (error) {
//       console.error("API call failed:", error);
//       if (error.response) {
//         console.error("Error details:", {
//           status: error.response.status,
//           statusText: error.response.statusText,
//           data: error.response.data,
//         });
//       }
//     }
//   };
  
//   useEffect(() => {
// fetchComments()
//   }, [])

  return (
    <div className='mt-3 flex flex-col gap-2 '>
      <h1 className='text-2xl font-semibold px-4'>COMMENTS</h1>
      {[...Array(10)].map((item) => (
        <CommentBody />
      ))}
    </div>
  );
}

export default Comments;
