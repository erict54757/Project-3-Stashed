import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  // InfoWindow,
} from "react-google-maps";

export default class MapWithADirectionsRenderer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <MyMapComponent
          key={this.props.key}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnODhpeIHWNJAzM2C7DR8Xn3UhMJ7z9kE&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `300px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          direction={this.props.direction}
        />
      </div>
    );
  }
}
// const pathCoordinates = [
//   { lat: 35.228624, lng: -80.834838 },
//   { lat: 35.218395, lng: -80.811001 }
// ];
const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: props.direction.lat, lng: props.direction.lng }}
    >
      {props.direction && (
        <Marker
          position={{ lat: 35.218395, lng: -80.811001 }}
          onClick={this.onMarkerClick}
          name={"Charlotte Barber & Beard"}
        />
      )}

      {/* <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
      </InfoWindow> */}

      {/* <Polyline
        path={pathCoordinates}
        geodesic={true}
        options={{
          strokeColor: "#ff2527",
          strokeOpacity: 0.75,
          strokeWeight: 3,

          featureType: "road",
          elementType: "all",
          stylers: [
            {
              visibility: "on"
            }
          ],

          icons: [
            {
              icon: lineSymbol,
              offset: "0",
              repeat: "20px"
            }
          ]
        }}
      /> */}
    </GoogleMap>
  ))
);
