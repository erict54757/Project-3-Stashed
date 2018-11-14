import React from "react";
import { Col, Card, Button} from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";


const Appointment = props=> (
 
    <Col m={4} s={12}>
      <Card
        className="blue-grey darken-1"
        textClassName="white-text"
        title="Appointment With:"
      >
      
      <h5>{props.name}</h5>
        <div >At {props.time}</div>
        <Button className="red" value={props.id} >X
         </Button> 
      </Card>
    </Col>
  


 );
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
      {this.state.appointments.map(appointment => (
      <Appointment
      id={appointment.id}
      time={appointment.time}
      name={appointment.name}
      />
      ))
    }</div></div>
    )
  }
}
export default ApptCust;
