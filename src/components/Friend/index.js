import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export const Friend = ({ friend }) => {
  return (
    <div className='col-lg-3'>
      <div className='friend'>
        <Link to={`/${friend.username}`}>
          <img src={friend.avatar} alt='' />
          <div className='details'>
            {friend.firstName} {friend.lastName}
          </div>
        </Link>
      </div>
    </div>
  );
}