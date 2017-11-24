import React, { Component } from 'react';
import Raven from 'raven-js';
import { ErrorCard } from 'shared/ErrorCard';

const logException = (ex, context) => {
  Raven.captureException(ex, {
    extra: context
  });
  window.console && console.error && console.error(ex);
}

export class Error extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    logException(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorCard />
    }
    return this.props.children
  }
}