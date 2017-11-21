import React from 'react';
import { CommentInput } from 'components/CommentInput';
import './main.css';

export const CommentBox = ({ comments }) => {
  return (
    <div className='comment-box'>
      <CommentInput />
    </div>
  );
}