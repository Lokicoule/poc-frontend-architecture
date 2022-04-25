import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { Kind } from "graphql";
import { apolloConfig } from "./config/apolloConfig";
import { ApolloErrorStrings } from "./constants/ApolloErrorStrings";

const httpLink = new HttpLink({
  uri: apolloConfig.HTTP_URI,
});

const wsLink = new WebSocketLink({
  uri: apolloConfig.WS_URI,
  options: {
    reconnect: false, //true
  },
});

const terminatingLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === Kind.OPERATION_DEFINITION &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const getToken = async () => {
  try {
    /*     return (await Auth.currentSession()).getAccessToken().getJwtToken();
     */
  } catch {
    return null;
  }
  return null;
};

const authLink = setContext(async (_, { headers }) => {
  const token = await getToken();

  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(ApolloErrorStrings.DEFAULT_MSG, message);

      /*  if (message === "UNAUTHENTICATED") {
        signOut(client);
      } */
    });
  }

  if (networkError) {
    console.log(ApolloErrorStrings.NETWORK_ERROR, networkError);

    /* if (networkError.statusCode === 401) {
      signOut(client);
    } */
  }
});
const link = ApolloLink.from([authLink, errorLink, terminatingLink]);

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link,
  cache,
});
