import { useEffect, useState, useRef } from 'react';
import graphQl from './graphqlRequest/graphqlRequest';

const getGraphQLData = async ({
  controller, setter, operationName, query, variables,
}) => {
  const response = await graphQl({
    operationName,
    query,
    variables,
    params: {
      signal: controller.current.signal,
    },
  });

  const data = await response.json();

  setter(() => ({
    loading: false,
    data,
  }));
};

export default function useGraphQL({
  operationName,
  query,
  variables,
}, deps = []) {
  const [graphqlState, setGraphqlState] = useState({
    loading: true,
    data: null,
  });

  const controllerRef = useRef(null);

  useEffect(() => {
    if (controllerRef?.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();

    setGraphqlState(() => ({
      loading: true,
      data: null,
    }));
    getGraphQLData({
      controller: controllerRef,
      setter: setGraphqlState,
      operationName,
      variables,
      query,
    });
  }, [...deps, getGraphQLData]);

  return graphqlState;
}
