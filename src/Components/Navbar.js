import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

export default class AppBarExampleIconButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // this function auto focus on the search bar when the navbar is clicked
  handleClick() {
    this.props.focus('autoComplete');
  }

  render() {
    const styles = {
      title: {
        cursor: 'pointer'
      }
    };

    return (
      <AppBar
        className="navbar"
        title={
          <span className="title-left" style={styles.title}>
            Just Eat it!
          </span>
        }
        onClick={this.handleClick}
        iconElementLeft={<IconButton />}
        iconElementRight={<FlatButton label="Find Restaurants nearby" />}
      />
    );
  }
}

