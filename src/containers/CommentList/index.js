import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Comment } from 'components/Comment';
import CommentListQuery from 'graphql/queries/AllComments.gql';

class CommentList extends Component {
  render() {
    const { loading, error, allComments } = this.props.data;
    const comments = allComments;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
      
    return comments.map((comment) => {
      return <Comment key={comment.id} comment={comment} />
    });
  }
}

export const CommentListContainer = graphql(CommentListQuery)(CommentList);