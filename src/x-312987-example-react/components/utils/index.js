export const noop = () => undefined;

export const normalizeURL = (url) => {
  const isLocal = globalThis.location.hostname === 'localhost';

  return isLocal ? `https://ven04075.service-now.com${url}` : url;
};
