import fetchJSON from './fetchJSON';

export default async function getRestaunrantInfo(city) {
  const restaurantUrl = `http://opentable.herokuapp.com/api/restaurants?city=${city}`;
  const response = await fetchJSON(restaurantUrl);
  return response.restaurants;
}
