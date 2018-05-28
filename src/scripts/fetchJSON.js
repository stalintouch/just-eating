export default function fetchLocation(url, headers = {}) {
  return fetch(url, {
    headers
  }).then(response => response.json());
}
