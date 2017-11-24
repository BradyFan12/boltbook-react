import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Post } from 'components/Post';
import DeletePostMutation from 'graphql/mutations/DeletePostMutation.gql';
import PostListQuery from 'graphql/queries/AllPosts.gql';
import { Loading } from 'shared/Loading';
import { ErrorCard } from 'shared/ErrorCard';

class PostList extends Component {
  render() {
    const { loading, error, allPosts } = this.props.data;
    const posts = allPosts;

    if (loading) return <Loading />
    if (error) return <ErrorCard />
    
    return posts.map(({ id, createdAt, avatar, body, user, comments }) => {
      return <Post
        key={id}
        createdAt={createdAt}
        avatar={avatar}
        body={body}
        user={user}
        comments={comments}
      />
    });
  }
}

export const PostListComponent = compose(
  graphql(PostListQuery, { name: 'postListQuery' }),
  graphql(DeletePostMutation, { name: 'deletePostMutation' })
)(PostList);