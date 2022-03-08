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

const httpLink = new HttpLink({
  uri: "http://localhost:3004/graphql",
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:3004/graphql`,
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
      console.log("GraphQL error", message);

      /*  if (message === "UNAUTHENTICATED") {
        signOut(client);
      } */
    });
  }

  if (networkError) {
    console.log("Network error", networkError);

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
