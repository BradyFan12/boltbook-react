import React from 'react';
import { Feed } from 'components/Feed';
import { FeedSidebar } from 'components/FeedSidebar';

export const NewsFeed = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-3'>
          <FeedSidebar />
        </div>
        <div className='col-lg-6 offset-lg-1'>
          <Feed />
        </div>
      </div>
    </div>
  )
}