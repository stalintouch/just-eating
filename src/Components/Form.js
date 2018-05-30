import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import fetchJSON from '../scripts/fetchJSON';

export default class Form extends Component {
  state = {
    input: '',
    cities: [],
    searchText: ''
  };

  // this function calls an api for autocomplete functionality on the search bar
  handleInput = async e => {
    await this.setState({ input: e, searchText: e });
    const cities = await fetchJSON(
      `https://cors-anywhere.herokuapp.com/http://gd.geobytes.com/AutoCompleteCity?&filter=US,CA&q=${
        this.state.input
      }`
    );
    this.setState({ cities });
  };

  // this functions pass the input on the form to the parent component
  update = e => {
    this.props.updateCity(e);
  };

  render() {
    return (
      <div>
        <AutoComplete
          id="autoComplete"
          fullWidth={true}
          autoFocus
          textFieldStyle={{}}
          listStyle={{ maxHeight: 200, overflow: 'auto' }}
          floatingLabelText="Type a city and get restaurants"
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.state.cities}
          maxSearchResults={5}
          onUpdateInput={this.handleInput}
          onNewRequest={this.update}
          disableFocusRipple={false}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}
