import React from 'react';
import { graphql } from 'react-apollo';
import UserListItemQuery from 'graphql/queries/OneUser.gql';

class UserListItem extends React.Component {
  render() {
    const { loading, error, User } = this.props.data;
    const user = User;
    
    return this.props.render(loading, error, user);
  }
}


export const UserItem = graphql(UserListItemQuery, {
  options: (props) => ({
    variables: {
      username: props.username,
    },
  }),
})(UserListItem);