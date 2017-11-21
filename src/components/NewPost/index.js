import React from 'react';

export const NewPost = () => {
  return (
    <div>
      <textarea
        className='form-control'
        style={{ 
          marginTop: '25px',
          minWidth: '100%',
          maxWidth: '100%',
          height: '125px'
        }}
        placeholder={`What's on your mind?`}
        ></textarea>
    </div>
  );
}