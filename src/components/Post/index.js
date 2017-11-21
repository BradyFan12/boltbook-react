import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './main.css';
import { Comment } from 'components/Comment';

export const Post = ({ createdAt, body, user, comments }) => {
  const postComments = comments.map(({ id, body }) => {
    return <Comment key={id} body={body} />
  })
  return (
    <div className='post'>
      <div className='avatar'>
        <img src={user.avatar} alt={user.username} />
        <Link to={`/${user.username}`}>
          <span>{user.firstName} {user.lastName}</span>
        </Link>
        <span>{ moment(createdAt).format('ddd, hA') }</span>
      </div>

      <p className='content'>{body}</p>

      <hr />

      <div className='interactions'>
        <ul>
          <li>Like</li>
          <li>Comment</li>
          <li>Share</li>
        </ul>
      </div>
        {postComments}
    </div>
  );
}