import React, {Component} from 'react';
import MarkerManager from '../util/market_manager';

export default class PlankMap extends Component {
  componentDidMount() {
    // this is SF, centered around aA
    const mapOptions = {
      center: { lat: 37.798766, lng: -122.402326}, 
      zoom: 15
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarketManager = new MarkerManager(this.map);
    //this.MarkerManager.updateMarkers(this.props.planks);
  }

  componentDidUpdate() {
    this.MarketManager.updateMarkers(this.props.planks);
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
        Plank map.
      </div>
    );
  }
}
