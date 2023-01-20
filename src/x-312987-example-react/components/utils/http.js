import { snHttpFactory } from 'sn-http-request';

const snHttp = snHttpFactory({
  xsrfToken: window.g_ck,
  batching: false,
});

export const cancelToken = () => snHttp.client.getSource();

export const request = ({
  method, url, data, source,
}) => snHttp.request(url, method, {
  data,
  source,
});
