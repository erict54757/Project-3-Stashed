import React from "react";
import { Col, Card, Button} from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import Appointment from "./DumbApptCard"


class ApptCust extends React.Component {
  //     constructor() {
  //  super();
  state ={
      appointments: [{ id:1, time: "8:30", name:"eric" },{id:2,  time: "8:45", name:"drew" },{ id:3, time: "9:30", name:"nicole" },{ id:4, time: "10:30", name:"eric" }]
    
      
  };


  render() {
    return (
      <div className="container">
      <div className="row">
      <Col s={4}>
      {this.state.appointments.map(appointment => (
      <Appointment
      id={appointment.id}
      time={appointment.time}
      name={appointment.name}
      />
      ))
    }
    </Col></div></div>
    )
  }
}
export default ApptCust;
