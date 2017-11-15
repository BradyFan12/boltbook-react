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
        defaultValue={`What's on your mind?`}
        ></textarea>
    </div>
  );
}