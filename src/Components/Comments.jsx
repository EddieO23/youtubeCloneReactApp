import React, { useEffect, useState } from 'react';
import CommentBody from './CommentBody';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

function Comments({ videoId }) {
  const [commentList, setCommentList] = useState()
  
  const fetchComments = async () => {
    try {
      const commentsResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&part=snippet,replies&videoId=${videoId}`
      );
      console.log(commentsResponse)
      const items = commentsResponse.data.items

      const commentsData = items.map((comment) => ({
        commentId: comment.id,
        authorChannelId: comment.snippet.topLevelComment.snippet.authorChannelId.value,
        authorProfile: comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
        authorName: comment.snippet.topLevelComment.snippet.authorDisplayName,
        commentText:comment.snippet.topLevelComment.snippet.textOriginal,
        commentLikes: comment.snippet.topLevelComment.snippet.likeCount,
      }))
      
      setCommentList(commentsData)
    } catch (error) {
      console.error('Error fetching the comments')
    }
    
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);


  return (
    <div className='mt-3 flex flex-col gap-2 '>
      <h1 className='text-2xl font-semibold px-4'>COMMENTS</h1>
      {commentList?.map((item) => (
        <CommentBody item={item} />
      ))}
    </div>
  );
}

export default Comments;
