import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Card } from 'components/Card';
import { Comment } from 'components/Comment';
import { DeletePostProp } from 'containers/DeletePost';
import './main.css';


export const Post = ({ id, createdAt, body, user, comments }) => {
  const displayPostMenu = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <Card>
      <div className='avatar'>
        <img src={user.avatar} alt={user.username} />
        <Link to={`/${user.username}`}>
          <span>{user.firstName} {user.lastName}</span>
        </Link>
        <span>{ moment(createdAt).format('ddd, hA') }</span>
        <span className='post-options'>
          <i
            className='fa fa-caret-down'
            onClick={displayPostMenu}
          />
          <DeletePostProp id={id} />
        </span>
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
        {comments.map(({ id, createdAt, body }) => {
          return <Comment key={id} createdAt={createdAt} body={body} />
        })}
    </Card>
  );
}