import React from 'react';
import { FriendList } from 'containers/FriendList';
import { Friend } from 'components/Friend';
import { Loading } from 'shared/Loading';
import { ErrorCard } from 'shared/ErrorCard';

export class UserFriends extends React.Component {
  render() {
    return (
      <div>
        <FriendList
          username={this.props.match.params.username}
          render={(loading, error, user) => {
            
            if (loading) return <Loading />
            if (error) return <ErrorCard />

            return user.friends.map((friend) => {
              return <Friend key={friend.id} friend={friend} />
            });
          }}
        />
      </div>
    );
  }
}