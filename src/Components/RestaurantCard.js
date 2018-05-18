import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

export default class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  handleExpandChange = expanded => {
    this.setState({ expanded: expanded });
  };

  handleToggle = (event, toggle) => {
    this.setState({ expanded: toggle });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleReduce = () => {
    this.setState({ expanded: false });
  };

  render() {
    const {
      name,
      address,
      city,
      area,
      postal_code,
      country,
      price,
      phone,
      reserve_url,
      image_url
    } = this.props.restaurantInfo;

    return (
      <Card
        expanded={this.state.expanded}
        onExpandChange={this.handleExpandChange}
      >
        <CardHeader
          title={name}
          subtitle={address}
          avatar={image_url}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="This toggle controls the expanded state of the component."
          />
        </CardText>
        {/* <CardMedia
          expandable={true}
          overlay={
            <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
          }
        >
          <img src={image_url} alt="" />
        </CardMedia> */}
        <CardTitle
          title="Card title"
          subtitle="Card subtitle"
          expandable={true}
        />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <RaisedButton
            label="Expand"
            primary={true}
            onClick={this.handleExpand}
          />
          <RaisedButton
            label="Reduce"
            secondary={true}
            onClick={this.handleReduce}
          />
        </CardActions>
      </Card>
    );
  }
}
