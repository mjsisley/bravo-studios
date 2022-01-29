import gql from "graphql-tag";

import { useGqlQuery, useGqlMutation } from "./gql";

export const fetchData = gql`[...]`;
const updateData = gql`[...]`;

const MyComponent = () => {
  const { data, isFetching } = useGqlQuery(() => [
    fetchData,
    {
      /* vars [...] */
    }
  ]);
  const [mutate, { isLoading }] = useGqlMutation(updateData, {
    refetchQueries: [fetchData],
    onData: () => setSuccess("<success message>"), // set some state
    onError: () => setError("<error message>") // set some state
  });
  // [...] state / event handlers / render method
};

export default MyComponent;
