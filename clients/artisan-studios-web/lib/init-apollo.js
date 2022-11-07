import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { setContext } from "apollo-link-context";
// import fetch from "isomorphic-unfetch";

let apolloClient = null;

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": "*",
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

export function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== "undefined";
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(
      new HttpLink({
        // uri: "https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn", // Server URL (must be absolute)
        uri: "http://localhost:9010/api", // Server URL (must be absolute)
        // credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
        // Use fetch() polyfill on the server
        fetch: !isBrowser && fetch,
      })
    ),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
