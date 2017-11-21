import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export const FeedSidebar = () => {
  return (
    <div className='feed-sidebar'>
      <ul>
        <li><Link to='/'>Profile</Link></li>
      </ul>
    </div>
  );
}