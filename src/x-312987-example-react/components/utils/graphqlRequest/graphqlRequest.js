import fetch from 'cross-fetch';

const DEFAULT_GQL_ENDPOINT = 'api/now/graphql';

export default function graphqlRequest({
  operationName = '', query = {}, variables = {}, params = {},
}) {
  const options = {
    method: 'POST',
    ...params,
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
      'X-Transaction-Source': window.transaction_source,
      'X-UserToken': window.g_ck,
    },
    body: JSON.stringify([{
      operationName,
      query,
      variables,
    }]),
  };
  return fetch(DEFAULT_GQL_ENDPOINT, options);
}
