import React from 'react';
import { graphql } from 'react-apollo';
import FriendListQuery from 'graphql/queries/UserFriends.gql';


class FriendListContainer extends React.Component {
  render() {
    const { loading, error, User } = this.props.data;
    const user = User;
      
    return this.props.render(loading, error, user);
  }
}



export const FriendList = graphql(FriendListQuery, {
  options: (props) => ({
    variables: {
      username: props.username,
    },
  }),
})(FriendListContainer);