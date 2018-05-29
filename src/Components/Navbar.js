import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import focus from '../scripts/focus'

export default class AppBarExampleIconButton extends Component {

  // this function auto focus on the search bar when the navbar is clicked
  handleClick = () => {
    focus('autoComplete');
  };

  render() {
    const styles = {
      title: {
        cursor: 'pointer'
      }
    };

    return (
      <AppBar
        title={<span style={styles.title}>Just Eat it!</span>}
        onTitleClick={this.handleClick}
        onRightIconButtonClick={this.handleClick}
        iconElementLeft={<IconButton />}
        iconElementRight={<FlatButton label="Find Restaurants nearby" />}
      />
    );
  }
}
