import React from 'react';
import { Timeline } from 'components/Timeline';
import { TimelineSidebar } from 'components/TimelineSidebar';

export const TimelineRoot = ({ user }) => {
  return (
    <div className='row'>
      <div className='col-lg-4'>
        <TimelineSidebar user={user} />
      </div>
      <div className='col-lg-8'>
        <Timeline user={user} />
      </div>
    </div>
  );
}