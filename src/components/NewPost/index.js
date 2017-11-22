import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Card } from 'components/Card';
import NewPostMutation from 'graphql/mutations/NewPostMutation.gql';

export class NewPostGql extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    this.props.mutate({
      variables: {
        userId: "cja806j6q00mq0141k50vr302",
        body: e.target.postBody.value,
        images: null,
        videos: null,
      }
    })
    .then(({ data }) => {
      console.log('got data', data);
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });
  }

  render() {
    return (
      <Card>
        <form onSubmit={this.submitForm}>
          <textarea
            name='postBody'
            className='form-control'
            style={{
              minWidth: '100%',
              maxWidth: '100%',
              height: '125px'
            }}
            placeholder={`What's on your mind?`}
            ></textarea>
            <button
              type='submit'
              className='btn btn-primary'
            >Post</button>
          </form>
      </Card>
    );
  }
}

export const NewPost = graphql(NewPostMutation)(NewPostGql);