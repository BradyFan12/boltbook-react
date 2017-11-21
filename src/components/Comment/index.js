import React from 'react';
import './main.css';

export const Comment = ({ body }) => {
  return (
    <div className='comment'>
      {body}
    </div>
  );
}