import React from 'react';

export const Comment = ({ comment }) => {
  return (
    <div className='comment'>
      {comment.body}
    </div>
  );
}