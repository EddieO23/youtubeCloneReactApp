import React from 'react';
import { BiLike } from "react-icons/bi";

function CommentBody({item}) {
  return (
    <div className='flex sm:gap-3 gap-2'>
      {/* <div className='bg-red-300 w-10 h-fit aspect-[1/1] rounded-full'></div> */}
      <img src={item.authorProfile} className='sm:w-10 w-9 h-fit aspect-[1/1] rounded-full' alt="" />
      <div className=''>
        <h2 className='text-md'>{item.authorName}</h2>
        <h3 className='text-neutral-300 whitespace-pre-line'>{item.commentText}</h3>
        <div className='flex items-center text-neutral-400 gap-1 cursor-pointer'>
          <BiLike />
          {item.commentLikes}
        </div>
      </div>
    </div>
  );
}

export default CommentBody;
