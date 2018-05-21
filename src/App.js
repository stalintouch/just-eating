import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Restaurant from './Components/Restaurant';
import fetchRestaurants from './utilities/fetchRestaurants';
import fetchLocation from './utilities/fetchLocation';
import Form from './Components/Form';

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
        <div>
          <header className="App-header">
            <h1 className="App-title">Welcome</h1>
            <Form updateCity={this.updateInput} />
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Restaurant restaurants={this.state.restaurants} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
