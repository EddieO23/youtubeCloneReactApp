import React from 'react';
import { BiLike } from "react-icons/bi";

function CommentBody() {
  return (
    <div className='flex gap-3'>
      <div className='bg-red-300 w-10 h-fit aspect-[1/1] rounded-full'></div>
      <div className=''>
        <h2 className='text-md'>CHANNEL NAME</h2>
        <h3 className='text-neutral-300 whitespace-pre-line'>COMMENT</h3>
        <div className='flex items-center text-neutral-400 gap-1 cursor-pointer'>
          <BiLike />
          LIKECOUNT
        </div>
      </div>
    </div>
  );
}

export default CommentBody;
