export default function fetchRestaurants(city = 'toronto') {
  return fetch(`http://opentable.herokuapp.com/api/restaurants?city=${city}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      return result.restaurants;
    });
}
