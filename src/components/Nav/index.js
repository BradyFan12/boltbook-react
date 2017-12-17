import React from 'react';
import { NavLink } from 'react-router-dom';
import './main.css';
import { CurrentUser } from 'containers/LoggedInUser';
import { Loading } from 'shared/Loading';
import { ErrorCard } from 'shared/ErrorCard';

export const Nav = () => {
  return (
    <div className='nav'>
      <div className='searchbar'>
        <input type='text' className='form-control' placeholder='Search' />
      </div>
      <CurrentUser
        render={(loading, error, loggedInUser) => {

          if (!loggedInUser || loggedInUser === null) {
            return (
              <div className='links'>
                <NavLink exact activeClassName='active' to='/'>Login</NavLink>
                <NavLink exact activeClassName='active' to='/register'>Register</NavLink>
              </div>
            );
          }
          
          if (loading) { return <Loading />; }
          if (error) { return <ErrorCard />; }

          return (
            <div className='links'>
              <NavLink to={`${loggedInUser.username}`}>{loggedInUser.firstName}</NavLink>
              <NavLink to='/feed'>Home</NavLink>
              <NavLink to='/find-friends'>Find Friends</NavLink>
              <i className='fa fa-users' aria-hidden='true'></i>
              <i className='fa fa-comment' aria-hidden='true'></i>
              <i className='fa fa-bell' aria-hidden='true'></i>
            </div>
          )
        }}
      />
    </div>
  );
}
