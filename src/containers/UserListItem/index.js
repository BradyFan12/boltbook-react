import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { ProfileHeader } from 'components/ProfileHeader';
import { TimelineRoot } from 'components/TimelineRoot';
import UserListItemQuery from 'graphql/queries/OneUser.gql';
import { Loading } from 'shared/Loading';
import { ErrorCard } from 'shared/ErrorCard';

class UserListItem extends Component {
  render() {
    const { loading, error, User } = this.props.data;
    const user = User;
    
    if (loading) return <Loading />
    if (error) return <ErrorCard />

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
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