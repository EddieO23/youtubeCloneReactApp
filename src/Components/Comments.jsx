import React, { useEffect, useState } from 'react';
// import CommentBody from './CommentBody';
import axios from 'axios';
import CommentCard from './CommentCard';

const API_KEY = import.meta.env.VITE_API_KEY;

function Comments({ videoId }) {
  const [commentList, setCommentList] = useState({comments: [], nextPageToken: null});

  const fetchComments = async () => {
    try {
      const commentsResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&part=snippet,replies&videoId=${videoId}&maxResults=15&${commentList.nextPageToken ? `&pageToken=${commentList.nextPageToken}`:``}`
      );
      console.log(commentsResponse.data);

      const items = commentsResponse.data.items;

      const commentsData = items.map((comment) => ({
        commentId: comment.id,
        authorChannelId:
          comment.snippet.topLevelComment.snippet.authorChannelId.value,
        authorProfile:
          comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
        authorName: comment.snippet.topLevelComment.snippet.authorDisplayName,
        commentText: comment.snippet.topLevelComment.snippet.textOriginal,
        commentLikes: comment.snippet.topLevelComment.snippet.likeCount,
        commentRepliesCount: comment.snippet.totalReplyCount
      }));
console.log(commentsData)
      setCommentList(prev=> ({
        comments: [...prev.comments, ...commentsData],
        nextPageToken: commentsResponse.data.nextPageToken
      }));

    } catch (error) {
      console.error('Error fetching the comments');
    }
  };

  useEffect(() => {
    fetchComments();
    console.log(commentList)
  }, [videoId]);

  return (
    <div className='mt-3 flex flex-col gap-2 '>
      <h1 className='text-2xl font-semibold px-4'>COMMENTS</h1>
      {commentList?.comments?.map((comment) => (
        <CommentCard comment={comment}/>
      ))}
<button className='text-gray-400 hover:underline'
onClick={()=> fetchComments()}
>Show more...</button>

    </div>
  );
}
 
export default Comments;
