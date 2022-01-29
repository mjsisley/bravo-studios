import { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { GraphQLClient } from "graphql-request";
import { print } from "graphql/language/printer";

// import { useAuth0 } from "../contexts/Auth0";

const getClient = token =>
  new GraphQLClient("http://localhost:4000/api", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      authorization: token ? `Bearer ${token}` : null
    }
  });

export const getQueryKey = query => query.definitions[0].name.value;

// qvFn stands for query & variables function
export const useGqlQuery = qvFn => {
  //   const { getTokenSilently } = useAuth0();
  return useQuery(
    () => {
      const [query, variables] = qvFn();
      return [getQueryKey(query), variables];
    },
    async variables => {
      //   const token = await getTokenSilently();
      const token = localStorage.getItem("token");
      return getClient(token).request(print(qvFn()[0]), variables);
    }
  );
};

export const useGqlMutation = (query, options = {}) => {
  //   const { getTokenSilently } = useAuth0();
  const token = localStorage.getItem("token");
  const [mutate, { data, isLoading, error }] = useMutation(
    async variables => {
      const token = await getTokenSilently();
      return getClient(token).request(print(query), variables);
    },
    {
      refetchQueries: (options.refetchQueries || []).map(getQueryKey),
      refetchQueriesOnFailure: (options.refetchQueriesOnFailure || []).map(
        getQueryKey
      )
    }
  );
  const callOnData = () => {
    if (data && options.onData) {
      options.onData(data);
    }
  };
  useEffect(callOnData, [data]);
  const callOnError = () => {
    if (error && options.onError) {
      options.onError(error);
    }
  };
  useEffect(callOnError, [error]);
  return [mutate, { data, isLoading, error }];
};
