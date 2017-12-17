import React from 'react';
import { graphql } from 'react-apollo';
import PostListQuery from 'graphql/queries/AllPosts.gql';

class PostListContainer extends React.Component {
  render() {
    const { loading, error, allPosts } = this.props.data;
    const posts = allPosts;
    
    return this.props.render(loading, error, posts);
  }
}

export const PostList = graphql(PostListQuery)(PostListContainer);