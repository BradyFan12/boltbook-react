import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { ProfileHeader } from 'components/ProfileHeader';
import { TimelineRoot } from 'components/TimelineRoot';
import UserListItemQuery from 'graphql/queries/users.graphql';

class UserListItem extends Component {
  render() {
    const { loading, error, User } = this.props.data;
    const user = User;
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-10 col-lg-offset-1'>
            <ProfileHeader user={user} />
            <TimelineRoot user={user} />
          </div>
        </div>
      </div>
    );
  }
}


export const UserItem = graphql(UserListItemQuery, {
  options: (props) => ({
    variables: {
      username: props.match.params.username,
    },
  }),
})(UserListItem);