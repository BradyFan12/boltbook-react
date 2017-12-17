import React from 'react';
import { PostList } from 'containers/PostList';
import { Loading } from 'shared/Loading';
import { ErrorCard } from 'shared/ErrorCard';
import { Post } from 'components/Post';
import { FeedSidebar } from 'components/FeedSidebar';


export class NewsFeed extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-3'>
            <FeedSidebar />
          </div>
          <div className='col-lg-6 offset-lg-1'>
            <PostList
              render={(loading, error, posts) => {

                if (loading) return <Loading />
                if (error) return <ErrorCard />

                return posts.map(({ id, createdAt, avatar, body, user, comments }) => {
                  return <Post
                    key={id}
                    id={id}
                    createdAt={createdAt}
                    avatar={avatar}
                    body={body}
                    user={user}
                    comments={comments}
                  />
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}