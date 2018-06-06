import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Restaurant from './Components/Restaurant';
import fetchJSON from './scripts/fetchJSON';
import Form from './Components/Form';
import focus from './scripts/focus';
import Navbar from './Components/Navbar';
import data from './__test__/data/restaurantData.json';
const restaurantAPIUrl =
  'https://opentable.herokuapp.com/api/restaurants?city=';

class App extends Component {
  state = { city: '', restaurants: [] };

  async componentDidMount() {
    const locationUrl = 'https://ipinfo.io';
    const location = await fetchJSON(locationUrl, {
      accept: 'application/json',
      'Content-Type': 'application/json'
    });

    this.setState({ city: location.city || 'toronto' });
    // const restaurants = await fetchJSON(
    //   `${restaurantAPIUrl + this.state.city}`
    // );
    this.setState({ restaurants: data.restaurants });
  }

  updateInput = async inputCity => {
    var city = await inputCity
      .split(', ')
      .slice(0, 1)
      .join('');

    this.setState({ city });
    const restaurants = await fetchJSON(
      `${restaurantAPIUrl + this.state.city}`
    );
    this.setState({ restaurants: restaurants.restaurants });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <Navbar focus={focus} />
          <header className="App-header">
            <h1 className="App-title">
              Find the best restaurants, cafés, and bars in
              <span> {this.state.city}</span>
            </h1>
          </header>
          <Form updateCity={this.updateInput} />
          <Restaurant
            city={this.state.city}
            restaurants={this.state.restaurants}
            focus={focus}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
