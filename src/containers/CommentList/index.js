import React from 'react';
import { graphql } from 'react-apollo';
import CommentListQuery from 'graphql/queries/AllComments.gql';

class CommentList extends React.Component {
  render() {
    const { loading, error, allComments } = this.props.data;
    const comments = allComments;
      
    return this.props.render(loading, error, comments);
  }
}

export const CommentListContainer = graphql(CommentListQuery)(CommentList);