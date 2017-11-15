import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export const ProfileHeader = ({ user }) => {
  return (
    <div>
      <img src={user.coverImage} alt='' width='100%' />
      <div className='profile-nav'>
        <img className='profile-avatar' src={user.avatar} alt='' />
        <Link to={`/${user.username}`}>Timeline</Link>
        <Link to={`/${user.username}/about`}>About</Link>
        <Link to={`/${user.username}/friends`}>Friends</Link>
        <Link to={`/${user.username}/photos`}>Photos</Link>
        <Link to='/'>More</Link>
      </div>
    </div>
  );
}