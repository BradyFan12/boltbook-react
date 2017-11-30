import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import DeletePostMutation from 'graphql/mutations/DeletePostMutation.gql';

class DeletePost extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete () {
    this.props.mutate({
      variables: { id: this.props.id }
    })
    .then((data) => {
      console.log('Data:', data)
    })
    .catch((error) => {
      console.log('Error:', error);
    })
  }
  
  render() {
    return (
      <button className='btn btn-danger' onClick={this.handleDelete}>
        Delete
      </button>
    );
  }
}

export const DeletePostProp = graphql(DeletePostMutation, {
  options: (props) => ({
    variables: {
      id: props.id,
    },
  }),
})(DeletePost);