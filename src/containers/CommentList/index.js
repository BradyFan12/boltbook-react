import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Comment } from 'components/Comment';
import CommentListQuery from 'graphql/queries/AllComments.gql';
import { Loading } from 'shared/Loading';
import { ErrorCard } from 'shared/ErrorCard';

class CommentList extends Component {
  render() {
    const { loading, error, allComments } = this.props.data;
    const comments = allComments;

    if (loading) return <Loading />
    if (error) return <ErrorCard />
      
    return comments.map((comment) => {
      return <Comment key={comment.id} comment={comment} />
    });
  }
}

export const CommentListContainer = graphql(CommentListQuery)(CommentList);