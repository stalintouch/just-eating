import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import GoogleMaps from './GoogleMaps';
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from 'material-ui/Card';

export default class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      showReadMore: true
    };
  }
  //  these 3 functions handles the toggling of a card to display more information
  handleExpandChange = expanded => {
    this.setState({ expanded: expanded });
  };

  handleExpand = () => {
    this.setState({ expanded: true, showReadMore: false });
  };

  handleReduce = () => {
    this.setState({ expanded: false, showReadMore: true });
  };

  render() {
    // styles for the component
    const cardStyle = {
      width: '100%',
      background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url(${this.props.backgroundImage}) no-repeat no-repeat center`,
      minHeight: '200px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      backgroundSize: 'cover',
      color: '#fff',
      position: 'relative'
    };

    // Destructuring props
    const {
      name,
      address,
      area,
      postal_code,
      price,
      phone,
      reserve_url,
      image_url,
      lat,
      lng
    } = this.props.restaurantInfo;

    return (
      <Card
        style={cardStyle}
        expanded={this.state.expanded}
        onExpandChange={this.handleExpandChange}
      >
        <CardHeader
          titleStyle={{ fontSize: '20px' }}
          titleColor="#fff"
          subtitleColor="#fff"
          title={name}
          subtitle={address}
          avatar={image_url}
          actAsExpander={true}
          showExpandableButton={false}
        />

        <CardTitle
          title={`Serving ${area}`}
          subtitle={`Price: ${price}`}
          expandable={true}
          titleColor="#fff"
          subtitleColor="#fff"
        />

        <CardText expandable={true} color="#fff">
          <ul className="card-ul">
            <li>
              Full Address: {address}, {postal_code}
            </li>
            <li>Phone: {phone}</li>
            <li>
              Website:&nbsp;
              <a
                href={reserve_url}
                title={`${name} restaurant`}
                target="_blank"
              >
                {reserve_url}
              </a>
            </li>
            <li />
          </ul>
          <div className="googlemaps">
            <GoogleMaps lat={lat} lng={lng} />
          </div>
        </CardText>

        <CardActions>
          {this.state.showReadMore && (
            <RaisedButton
              label="Read more"
              primary={true}
              onClick={this.handleExpand}
            />
          )}
          {!this.state.showReadMore && (
            <RaisedButton
              label="Read less"
              secondary={true}
              onClick={this.handleReduce}
            />
          )}
        </CardActions>
      </Card>
    );
  }
}
