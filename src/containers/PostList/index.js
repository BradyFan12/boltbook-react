import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Post } from 'components/Post';
import PostListQuery from 'graphql/queries/posts.graphql';

class PostList extends Component {
  render() {
    const { loading, error, allPosts } = this.props.data;
    const posts = allPosts;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    console.log(posts);
    
    return posts.map(({ id, createdAt, avatar, body, user }) => {
      return <Post
        key={id}
        createdAt={createdAt}
        avatar={avatar}
        body={body}
        user={user}
      />
    });
  }
}

export const PostListComponent = graphql(PostListQuery)(PostList);