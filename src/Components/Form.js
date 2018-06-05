import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import fetchJSON from '../scripts/fetchJSON';

export default class Form extends Component {
  state = {
    input: '',
    cities: []
  };

  // this function calls an api for autocomplete functionality on the search bar
  handleInput = async e => {
    await this.setState({ input: e});
    const cities = await fetchJSON(
      `https://cors-anywhere.herokuapp.com/http://gd.geobytes.com/AutoCompleteCity?&filter=US,CA&q=${
        this.state.input
      }`
    );
    this.setState({ cities });
  };

  // this functions pass the input on the form to the parent component
  update = e => {
    e.preventDefault();
    this.props.updateCity(this.state.input);
  };

  // this is for the auto complete on click function to work,  will come back to this to eliminate duplicate
  autoCompleteUpdate = e => {
    this.props.updateCity(this.state.input);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.update} value={this.state.input}>
          <AutoComplete
            id="autoComplete"
            fullWidth={true}
            autoFocus
            listStyle={{ maxHeight: 200, overflow: 'auto' }}
            floatingLabelText="Type a city and get restaurants"
            filter={AutoComplete.fuzzyFilter}
            dataSource={this.state.cities}
            maxSearchResults={5}
            onUpdateInput={this.handleInput}
            onNewRequest={this.autoCompleteUpdate}
            disableFocusRipple={false}
          />
        </form>
      </div>
    );
  }
}
