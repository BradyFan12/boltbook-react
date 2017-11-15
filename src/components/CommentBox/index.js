import React from 'react';
import { CommentInput } from 'components/CommentInput';
import { CommentListContainer } from 'containers/CommentList';

export const CommentBox = () => {
  return (
    <div>
      <CommentInput />
      <CommentListContainer />
    </div>
  );
}