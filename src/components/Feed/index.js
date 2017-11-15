import React from 'react';
import { PostListComponent } from 'containers/PostList';
import { CommentListContainer } from 'containers/CommentList';

export const Feed = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xs-6 col-xs-offset-3'>
          <PostListComponent>
            <CommentListContainer />
          </PostListComponent>
        </div>
      </div>
    </div>
  );
}
