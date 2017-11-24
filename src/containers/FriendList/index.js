import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Friend } from 'components/Friend';
import FriendListQuery from 'graphql/queries/UserFriends.gql';
import { Loading } from 'shared/Loading';
import { ErrorCard } from 'shared/ErrorCard';

class FriendList extends Component {
  render() {
    const { data: { loading, error, User } } = this.props;
    const user = User;

    if (loading) return <Loading />
    if (error) return <ErrorCard />
      
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