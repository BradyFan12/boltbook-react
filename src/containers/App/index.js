import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Nav } from 'components/Nav';
import { NewsFeed } from 'pages/NewsFeed';
import { NotFound } from 'components/NotFound';

import { Login } from 'containers/Login';
import { FindFriends } from 'containers/FindFriends';

// Pages
import { UserFriends } from 'pages/UserFriends';
import { Profile } from 'pages/Profile';

export const App = () => {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/feed' component={NewsFeed} />
        <Route exact path='/find-friends' component={FindFriends} />
        <Route exact path='/:username' component={Profile} />
        <Route exact path='/:username/friends' component={UserFriends} />
        <Route component={NotFound} />
      </Switch>

    </div>
  );
}