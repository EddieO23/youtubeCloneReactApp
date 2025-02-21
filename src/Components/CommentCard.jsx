import React, { useEffect, useState } from 'react';
import CommentBody from './CommentBody';
import axios from 'axios';
import { getCommentReplies } from '../utils/api';

const API_KEY = import.meta.env.VITE_API_KEY;

function CommentCard({ comment }) {

  const [replies, setReplies] = useState([])
  
  const fetchReplies = async () => {
    try {
      if (comment.commentRepliesCount) {
        const repliesResponse = await getCommentReplies(comment.commentId)
        // console.log(repliesResponse.data);

        const repliesData = repliesResponse.map((item) => ({
          commentId: item.id,
          authorChannelId: item.snippet.authorChannelId.value,
          authorProfile: item.snippet.authorChannelId.authorProfileImageUrl,
          authorName: item.snippet.authorDisplayName,
          commentText: item.snippet.textOriginal,
          commentLikes: item.snippet.likeCount,
        }));
      setReplies(repliesData);
      }

    } catch (error) {
      console.error('Error fetching the comment replies');
    }
  };

  useEffect(() => {
    fetchReplies();
  }, []);

  return (
    <div className='flex flex-col gap-2'>
      <CommentBody item={comment} />
      <div className='px-14'>
        {replies?.map((item, indx) => (
          //delete this later?//
          <div className='bg-red-300'> 
            <CommentBody key={indx} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentCard;
