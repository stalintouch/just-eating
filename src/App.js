import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Restaurant from './Components/Restaurant';
import fetchRestaurants from './scripts/fetchRestaurants';
import fetchLocation from './scripts/fetchLocation';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import FlatButton from 'material-ui/FlatButton';
import focus from './scripts/focus'

class App extends Component {
  state = { city: '', restaurants: [] };

  async componentDidMount() {
    const response = await fetchLocation();
    const data = await response.json();
    this.setState({ city: data.city });

    fetchRestaurants(this.state.city).then(restaurants =>
      this.setState({ restaurants })
    );
  }

  updateInput = inputCity => {
    var city = inputCity
      .split(', ')
      .slice(0, 1)
      .join('');

    this.setState({ city });

    fetchRestaurants(this.state.city).then(restaurants =>
      this.setState({ restaurants })
    );
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <Navbar />
          <header className="App-header">
            <h1 className="App-title">
              Find the best restaurants, cafés, and bars in{' '}
              <span> {this.state.city}</span>
            </h1>
            <Form updateCity={this.updateInput} />
          </header>
          <p className="App-intro">
            Not in {this.state.city}? Change it&nbsp;
            <FlatButton label="Here" onClick={()=> focus('autoComplete')} backgroundColor="#FFFF00"/>
          </p>
          <Restaurant restaurants={this.state.restaurants} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
