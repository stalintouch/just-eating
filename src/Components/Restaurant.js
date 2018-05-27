import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';
import NotFound from './NotFound';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import focus from '../scripts/focus';

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = { urls: [], loading: true };
  }

  async componentDidMount() {
    await fetch(
      'https://api.unsplash.com/search/photos?client_id=cdaa537bca08095f8342feb8bc2e12893de05e62eba059daed8dba9e13e046bd&page=1&query=food&per_page=100'
    )
      .then(res => res.json())
      .then(data => this.setState({ urls: data.results }));
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
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
    if (!this.props.restaurants.length && this.state.loading) {
      return (
        <div style={{ display: ' flex', justifyContent: 'center' }}>
          <CircularProgress size={180} thickness={15} />
        </div>
      );
    } else if (!this.props.restaurants.length && !this.state.loading) {
      return <NotFound />;
    } else {
      return (
        <div>
          <div style={{ marginBottom: '30px' }}>
            Not in {this.props.city}? Change it&nbsp;&nbsp;
            <FlatButton
              label="Here"
              onClick={() => focus('autoComplete')}
              backgroundColor="#FFFF00"
            />
          </div>
          {this.renderCards()} 
        </div>
      );
    }
  }
}

export default Restaurant;
