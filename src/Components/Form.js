import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class Form extends Component {
  state = {
    input: '',
    cities: ["toronto"],
    searchText:''
  };

  handleInput = async e => {
    await this.setState({ input: e, searchText: e });
    const response = await fetch(
      `http://gd.geobytes.com/AutoCompleteCity?&filter=US,CA&q=${
        this.state.input
      }`
    );
    const data = await response.json();
    this.setState({ cities: data });
  };

  update = e => {
    this.props.updateCity(e);
  };

  render() {
    return (
        <AutoComplete
          autoFocus
          listStyle={{ maxHeight: 200, overflow: 'auto' }}
          floatingLabelText="Type a city and get restaurants"
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.state.cities}
          maxSearchResults={5}
          onUpdateInput={this.handleInput}
          onNewRequest={this.update}
          disableFocusRipple={false}
          searchText={this.state.searchText}
          onChange={e=> console.log(e.target)}
        />
    );
  }
}
