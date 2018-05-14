import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';

import { App } from 'containers/App';
import { Error } from 'containers/Error';
import { LOCAL_SIMPLE_API } from './constants';
import registerServiceWorker from './registerServiceWorker';

// styles
import './styles/normalize.css';
import './styles/reset.css';
import './styles/application.css';

// const client = new ApolloClient({
//   link: new HttpLink({ uri: LOCAL_SIMPLE_API }),
//   cache: new InMemoryCache()
// });

const httpLink = createHttpLink({
  uri: LOCAL_SIMPLE_API,
});

let cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Error>
        <App />
      </Error>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
