import React, { useEffect, useState } from 'react';
import CommentBody from './CommentBody';
import axios from 'axios';
import { getCommentReplies } from '../utils/api';
import { parseReplies } from '../utils/parseData';

const API_KEY = import.meta.env.VITE_API_KEY;

function CommentCard({ comment }) {

  const [replies, setReplies] = useState([])
  
  const fetchReplies = async () => {
    try {
      if (comment.commentRepliesCount) {
        const repliesResponse = await getCommentReplies(comment.commentId)
        // console.log(repliesResponse.data);

        const repliesData = parseReplies(repliesResponse)
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
