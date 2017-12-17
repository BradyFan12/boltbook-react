import React from 'react';
import { graphql } from 'react-apollo';
import LoggedInUserQuery from 'graphql/queries/auth/LoggedInUser.gql';

class LoggedInUser extends React.Component {
  render() {
    const { loading, error, loggedInUser } = this.props.data;

    console.log(loggedInUser);

    return this.props.render(loading, error, loggedInUser);
  }
}

export const CurrentUser = graphql(LoggedInUserQuery)(LoggedInUser);