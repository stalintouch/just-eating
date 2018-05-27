export default function fetchLocation() {
  return fetch('https://ipinfo.io', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(data => data.json());
}
