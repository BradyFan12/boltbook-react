import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Nav } from 'components/Nav';
import { Feed } from 'components/Feed';
import { NotFound } from 'components/NotFound';

import { UserItem } from 'containers/UserListItem';
// import { AccountAbout } from 'containers/AccountAbout';
import { FriendItem } from 'containers/FriendList';

export const App = () => {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path='/' component={Feed} />
        <Route exact path='/:username' component={UserItem} />
        {/* <Route exact path='/:username/about' component={AccountAbout} /> */}
        <Route exact path='/:username/friends' component={FriendItem} />
        <Route component={NotFound} />
      </Switch>

    </div>
  );
}