import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  render() {
    return (
      <Map
      google={window.google}
        zoom={14}
        style={{ width: "100%", height: "10%" }}
      >
        <Marker
          name={"Charlotte Barber & Beard"}
          position={{ lat: 35.218395, lng: -80.811001 }}
        />
        <Marker />
        <Marker
          name={"Your position"}
          position={{ lat: 35.228624, lng: -80.834838 }}
            icon={{
              url: "/path/to/custom_icon.png",
              anchor: new window.google.maps.Point(32, 32),
              scaledSize: new window.google.maps.Size(64, 64)
            }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBnODhpeIHWNJAzM2C7DR8Xn3UhMJ7z9kE"
})(MapContainer);







    // const { compose, withProps, lifecycle } = require("recompose");
    // const {
    //   withScriptjs,
    //   withGoogleMap,
    //   GoogleMap,
    //   DirectionsRenderer,
    // } = require("react-google-maps");
    
    // const MapWithADirectionsRenderer = compose(
    //   withProps({
    //     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    //     loadingElement: <div style={{ height: `100%` }} />,
    //     containerElement: <div style={{ height: `400px` }} />,
    //     mapElement: <div style={{ height: `100%` }} />,
    //   }),
    //   withScriptjs,
    //   withGoogleMap,
    //   lifecycle({
    //     componentDidMount() {
    //       const DirectionsService = new google.maps.DirectionsService();
    
    //       DirectionsService.route({
    //         origin: new google.maps.LatLng(41.8507300, -87.6512600),
    //         destination: new google.maps.LatLng(41.8525800, -87.6514100),
    //         travelMode: google.maps.TravelMode.DRIVING,
    //       }, (result, status) => {
    //         if (status === google.maps.DirectionsStatus.OK) {
    //           this.setState({
    //             directions: result,
    //           });
    //         } else {
    //           console.error(`error fetching directions ${result}`);
    //         }
    //       });
    //     }
    //   })
    // )(props =>
    //   <GoogleMap
    //     defaultZoom={7}
    //     defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
    //   >
    //     {props.directions && <DirectionsRenderer directions={props.directions} />}
    //   </GoogleMap>
    // );
    
    // <MapWithADirectionsRenderer />