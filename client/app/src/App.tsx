// npm services
// import react, { createContext, useContext, useMemo, useState } from "react";
// // apollo/client
import {
  ApolloClient,
  InMemoryCache,
  split, HttpLink
} from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { ApolloProvider } from "@apollo/react-hooks";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "apollo-utilities";
import { createClient } from 'graphql-ws';
import { Provider } from "react-redux";

// // mui
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import CssBaseline from '@mui/material/CssBaseline';





// local services
// import Home from "./components/Home";
import SignUp from "./Features/users/pages/SignUp";
import { Copyright } from "./Features/global/components/Copyright";
import SignIn from "./Features/users/pages/SignIn";
// import { ToggleColorMode } from './functions/themeToggle';
import { store } from "./store/store";
import Header from "./Features/global/components/Header";


// set http server
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

// set wsClient
const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:4000/graphql',
  connectionParams: {
    // authToken: user.authToken,
  },
}));

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});


// set split link to choose between wslink/httplink
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

// set apolloClient
const client = new ApolloClient({
  link: errorLink.concat(link),
  cache: new InMemoryCache(),
});


function MyApp() {

  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
        <Header/>
          <SignUp/>
          {/* <SignIn /> */}
          {/* <Home /> */}
        </ApolloProvider>
      </Provider>
    </>
  )
}

export default MyApp