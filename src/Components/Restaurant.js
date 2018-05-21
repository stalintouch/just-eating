import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = { urls: [] };
  }

  async componentDidMount() {
    await fetch(
      'https://api.unsplash.com/search/photos?client_id=cdaa537bca08095f8342feb8bc2e12893de05e62eba059daed8dba9e13e046bd&page=1&query=food&per_page=100'
    )
      .then(res => res.json())
      .then(data => this.setState({ urls: data.results }));
  }

  renderCards = () => {
    return this.props.restaurants.map((restaurant, idx) => {
      return (
        <RestaurantCard
          backgroundImage={this.state.urls[idx].urls.full}
          key={restaurant.id}
          restaurantInfo={restaurant}
        />
      );
    });
  };

  render() {
    return <div>{this.renderCards()}</div>;
  }
}

export default Restaurant;
