import React from 'react'
import MapWithADirectionsRenderer from './MapWithADirectionsRenderer'

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myArray: [
        {lat: 35.218395, lng: -80.811001}
      ]
    };
  };

  render() {
    return (
      <div>
        {
          this.state.myArray.map((a,index) => {
            return <MapWithADirectionsRenderer
              direction={a}
              key={index}
            />
          })
        }
      </div>
    );
  }
}