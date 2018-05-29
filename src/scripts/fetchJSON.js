// a general purpose wrapper for fetch getting as optional arguments headers

export default function fetchLocation(url, headers = {}) {
  return fetch(url, {
    headers
  }).then(response => response.json());
}
