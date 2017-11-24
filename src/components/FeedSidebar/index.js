import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export const FeedSidebar = () => {
  return (
    <div className='feed-sidebar'>
      <ul>
        {/* Change name to current user w/ avatar */}
        <li><Link to='/'>Clayton Ray</Link></li>
        <li><Link to='/'>News Feed</Link></li>
        <li><Link to='/'>Watch</Link></li>
        
        <hr />
        <span>Explore</span>
        <hr />

        <li><Link to='/'>Events</Link></li>
        <li><Link to='/'>Pages</Link></li>
        <li><Link to='/'>Groups</Link></li>
        <li><Link to='/'>Saved</Link></li>
      </ul>
    </div>
  );
}