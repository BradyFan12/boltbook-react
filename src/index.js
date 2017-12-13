import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import registerServiceWorker from './registerServiceWorker';

import { App } from 'containers/App';
import { Error } from 'containers/Error';

import { LOCAL_SIMPLE_API } from './constants';

// styles
import './styles/normalize.css';
import './styles/reset.css';
import './styles/application.css';

const client = new ApolloClient({
  link: new HttpLink({ uri: LOCAL_SIMPLE_API }),
  cache: new InMemoryCache()
});


render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Error>
        <App />
      </Error>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
