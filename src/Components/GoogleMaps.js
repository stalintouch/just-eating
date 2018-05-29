/* global google */
import React, { Component } from 'react';

// this component creates a google map with the received props
export default class GoogleMaps extends Component {
  
  componentDidMount() {
    const {lat, lng} = this.props
    var map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat,
        lng
      }
    });
    var myCenter = new google.maps.LatLng(lat, lng);

    var marker = new google.maps.Marker({
      position: myCenter,
    });
    marker.setMap(map)
  }

  render() {
    return <div ref="map" style={{ height: '100%', width: '100%' }} />;
  }
}
