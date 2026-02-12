import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

/**
 * Apollo Client configuration for the social media app.
 * Handles JWT authentication and cache policies.
 */

const httpLink = createHttpLink({
  uri: "https://social-media-platform-server-production.up.railway.app/graphql",
});

const authLink = setContext(async (_, { headers }) => {
  // TODO: Get token from SecureStore or your state manager
  const token = "";

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // Example of offset-based pagination policy
          feed: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});
