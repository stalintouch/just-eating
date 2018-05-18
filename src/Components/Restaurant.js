import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';

class Restaurant extends Component {
  constructor(props){
    super(props)
  }

  renderCards = () => {
    return this.props.restaurants.map(restaurant =>{
      return (
        <div>
          <RestaurantCard restaurantInfo={restaurant} />
        </div>
      )
    })
  }
  
  render() {
    return (
      <div>
        {this.renderCards()}
      </div>
    );
  }
}

export default Restaurant;