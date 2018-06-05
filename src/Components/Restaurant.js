import React, { Component } from 'react';
import fetchJSON from '../scripts/fetchJSON';
import RestaurantCard from './RestaurantCard';
import NotFound from './NotFound';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
const imagesUrl =
  'https://api.unsplash.com/search/photos?client_id=cdaa537bca08095f8342feb8bc2e12893de05e62eba059daed8dba9e13e046bd&page=1&query=food&per_page=100';

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundImages: [], loading: true };
    this.handleFocus = this.handleFocus.bind(this);
  }
  // fetches the background images from unsplash, to display them as background
  async componentDidMount() {
    const images = await fetchJSON(imagesUrl);
    console.log(images);
    this.setState({ backgroundImages: images.results });
  }

  componentWillReceiveProps() {
    // this settimeout is to make sure the loading spinner disappears after the component receive
    // props but not too soon so it shows the not found component
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  handleFocus() {
    this.props.focus('autoComplete');
  }
  // renderCards loops throught the props received from App.js and assembles a RestaurantCard with the
  // proper info passed
  renderCards = () => {
    return this.props.restaurants.map((restaurant, idx) => {
      return (
        <RestaurantCard
          backgroundImage={this.state.backgroundImages[idx].urls.full}
          key={restaurant.id}
          restaurantInfo={restaurant}
        />
      );
    });
  };

  render() {
    // shows the loading spinner
    if (!this.props.restaurants.length && this.state.loading) {
      return (
        <div style={{ display: ' flex', justifyContent: 'center' }}>
          <CircularProgress size={180} thickness={15} />
        </div>
      );
      // shows the not found component
    } else if (!this.props.restaurants.length && !this.state.loading) {
      return <NotFound />;
    } else {
      return (
        <div>
          <div style={{ marginBottom: '30px' }}>
            Not in {this.props.city}? Change it&nbsp;&nbsp;
            <FlatButton
              className="restaurant"
              label="Here"
              onClick={this.handleFocus}
              backgroundColor="#FFFF00"
            />
          </div>
          {/* shows the RestaurantCard component */}
          {this.renderCards()}
        </div>
      );
    }
  }
}

export default Restaurant;
