import React from 'react';
import { UserItem } from '../../containers/UserListItem/index';
import { ProfileHeader } from 'components/ProfileHeader';
import { TimelineSidebar } from 'components/TimelineSidebar';
import { Timeline } from 'components/Timeline';
import { Loading } from 'shared/Loading';
import { ErrorCard } from 'shared/ErrorCard';

export class Profile extends React.Component {
  render() {
    return (
      <div>
        <UserItem
          username={this.props.match.params.username}
          render={(loading, error, user) => {
            if (loading) return <Loading />
            if (error) return <ErrorCard />

            return (
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-lg-10 offset-lg-1'>
                    <ProfileHeader user={user} />
                    <div className='row'>
                      <div className='col-lg-4'>
                        <TimelineSidebar user={user} />
                      </div>
                      <div className='col-lg-8'>
                        <Timeline user={user} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}