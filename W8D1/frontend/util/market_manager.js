export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromPlank(plank) {
    const position = new google.maps.LatLng(plank.lat, plank.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      plankId: plank.id
    });
    this.markers[marker.plankId] = marker;
  }

  updateMarkers(planks) {
    planks.forEach(plank => {
      let plankId = plank.id;
      //For each bench, 
      //if the id is not a key in this.markers
      //create a new marker from it
      //and add it to the map and this.markers
      if (!(plankId in this.markers)) {
        let newMarker = this.createMarkerFromPlank(plank);
        this.markers[plankId] = newMarker;
      }
    });
  }

}