import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Restaurant from './Components/Restaurant';
import fetchRestaurants from './scripts/fetchRestaurants';
import fetchLocation from './scripts/fetchLocation';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import FlatButton from 'material-ui/FlatButton';


class App extends Component {
  state = { city: '', restaurants: [] };

  async componentDidMount() {
    const data =  await fetchLocation();
    this.setState({ city: data.city });

    fetchRestaurants(this.state.city).then(restaurants =>
      this.setState({ restaurants })
    );
  }

  updateInput = async inputCity => {
    var city = await inputCity
      .split(', ')
      .slice(0, 1)
      .join('');

    this.setState({ city});
    
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
              Find the best restaurants, cafés, and bars in
              <span> {this.state.city}</span>
            </h1>
            <Form updateCity={this.updateInput} />
          </header>
          <p className="App-intro">
            
          </p>
          <Restaurant city={this.state.city} restaurants={this.state.restaurants} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
