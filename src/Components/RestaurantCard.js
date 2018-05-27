import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import GoogleMaps from './GoogleMaps';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

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
          <div className="googlemaps">
            <GoogleMaps lat={lat} lng={lng} />
          </div>
          <ul className="card-ul">
            <li>
              Full Address: {address}, {postal_code}{' '}
            </li>
            <li>Phone: {phone}</li>
            <li>
              Website:{' '}
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
        </CardText>

        <CardActions>
          <RaisedButton
            label="Read more"
            primary={true}
            onClick={this.handleExpand}
          />
          <RaisedButton
            label="Read less"
            secondary={true}
            onClick={this.handleReduce}
          />
        </CardActions>
      </Card>
    );
  }
}
