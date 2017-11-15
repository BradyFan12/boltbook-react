import React from 'react';
import { NavLink } from 'react-router-dom';
import './main.css';

export const Nav = () => {
  return (
    <div className='nav'>
      <div className='searchbar'>
        <input type='text' className='form-control' placeholder='Search' />
      </div>
      <div className='links'>
        <NavLink to='/iamclaytonray'>Clayton</NavLink>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/find-friends'>Find Friends</NavLink>
        <i className='fa fa-users' aria-hidden='true'></i>
        <i className='fa fa-comment' aria-hidden='true'></i>
        <i className='fa fa-bell' aria-hidden='true'></i>
      </div>
    </div>
  );
}
