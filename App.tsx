import React from 'react';
import { Root } from './src/Root';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

export default () => (
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
);
