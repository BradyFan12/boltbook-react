import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Friend } from 'components/Friend';
import FriendListQuery from 'graphql/queries/UserFriends.gql';

class FriendList extends Component {
  render() {
    const { data: { loading, error, User } } = this.props;
    const user = User;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
      
    return user.friends.map((friend) => {
      return <Friend key={friend.id} friend={friend} />
    });
  }
}



export const FriendItem = graphql(FriendListQuery, {
  options: (props) => ({
    variables: {
      username: props.match.params.username,
    },
  }),
})(FriendList);