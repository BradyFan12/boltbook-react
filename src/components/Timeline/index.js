import React from 'react';
import { Post } from 'components/Post';
import { NewPost } from 'components/NewPost';

export const Timeline = ({ user }) => {
  return (
    <div>
      <NewPost />
      {user.posts.map(({ id, createdAt, body, user, comments }) => {
        return (
          <Post
            key={id}
            id={id}
            createdAt={createdAt}
            body={body}
            user={user}
            comments={comments.map(({ comment, id }) => {
              return comment;
            })} // Does this belong here?
          />
        );
      })}
    </div>
  );
}