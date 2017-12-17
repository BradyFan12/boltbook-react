import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AuthenticateUser from 'graphql/mutations/auth/AuthenticateUser.gql';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  confirm = async () => {
    const { username, password } = this.state;
    const result = await this.props.mutate({
        variables: {
          username,
          password
        }
      });
    const { id, token } = result.data.authenticateUser;
    this.saveUserData(id, token);
    
    this.props.history.push(`/feed`);
    // Todo: Need to make sure we handle if a user doesn't authenticate
  }

  saveUserData = (id, token) => {
    localStorage.setItem('user_id', id);
    localStorage.setItem('token', token);
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2'>
            <h1>Login</h1>
            <div className='form-group'>
              <input
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
                type='text'
                placeholder='Username'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                type='password'
                placeholder='Password'
                className='form-control'
              />
            </div>
            <button onClick={this.confirm} className='btn btn-primary'>
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export const Login = graphql(AuthenticateUser)(LoginForm);