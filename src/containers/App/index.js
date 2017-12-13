import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Nav } from 'components/Nav';
import { NewsFeed } from 'components/NewsFeed';
import { NotFound } from 'components/NotFound';

import { Login } from 'containers/Login';
import { UserItem } from 'containers/UserListItem';
import { FriendItem } from 'containers/FriendList';
import { FindFriends } from 'containers/FindFriends';

export const App = () => {
  return (
    <div>
      <Nav /> {/* Needs to be extracted so we can grab required props */}

      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/feed' component={NewsFeed} />
        <Route exact path='/find-friends' component={FindFriends} />
        <Route exact path='/:username' component={UserItem} />
        <Route exact path='/:username/friends' component={FriendItem} />
        <Route component={NotFound} />
      </Switch>

    </div>
  );
}