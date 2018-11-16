import React, { Component } from 'react';
import { Row, Carousel, Col, Collection, CollectionItem, Icon, Input, Badge } from "react-materialize";
import EmployeeScheduleModal from "./employeeScheduleModal";
// import { Link, Route } from "react-router-dom";
import "jquery";
import Appointment from "./DumbApptCard"
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./employeeScheduleModal.css"
import "./employeeSchedule.css"
class EmployeeSchedule extends React.Component {
  state = {
    appointments: [{ id: 1, time: "8:30", name: "eric" }, { id: 2, time: "8:45", name: "drew" }, { id: 3, time: "9:30", name: "nicole" }, { id: 4, time: "10:30", name: "eric" }]


  };

  render() {
    return (
      <div>
         <Row >
        <Row >
          <Col>
            <EmployeeScheduleModal />

        </Col>
        </Row>

        
          <Col className="inputDate "> <Input  
          className="center "
            name='on' type='date' placeholder="Pick A Date"
            value={this.state.date} 
            onChange={this.handleInputChange} >
            <Icon>date_range</Icon></Input>
          </Col>  
        
        </Row>


        <Row className="right"
        style={{paddingLeft:"3%", paddingRight: "3%"}}>
     
          
      
      {this.state.appointments.map(appointment => (
       <div className="col s12 m6 l4" >
      <Appointment 
      id={appointment.id}
      time={appointment.time}
      name={appointment.name}
      />
      </div>
      ))
    }
       
        </Row>
      </div>
    );
  }
}

export default EmployeeSchedule;