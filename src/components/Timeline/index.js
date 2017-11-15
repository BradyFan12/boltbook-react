import React from 'react';
import { Post } from 'components/Post';
import { NewPost } from 'components/NewPost';

export const Timeline = ({ user }) => {
  return (
    <div>
      <NewPost />
      {user.posts.map(({ id, createdAt, body, user }) => {
        return (
          <Post
            key={id}
            createdAt={createdAt}
            body={body}
            user={user}
          />
        );
      })}
    </div>
  );
}