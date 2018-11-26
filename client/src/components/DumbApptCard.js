import React, { Component } from "react";
import { Card, Button } from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";

import EmpApptUpdateModal from "./empApptUpdateModal.js"
import EmployeeSchedule from "./employeeSchedule"
import API from "../utils/API"
import "./DumbApptCard.css"

// function deleteAppointment (id){
//   API.deleteAppointment(id)
//     .then(res => this.getAppointments())
//     .catch(err => console.log(err));
// };

class Appointment extends Component {
  render() {
    return (
      <Card
        className="blue-grey darken-1 cardBody z-depth-5"
        textClassName="white-text"
      >
        <h4>
          {this.props.firstName} {this.props.lastName}
        </h4>
        <h5>At {this.props.time}</h5>
        <Button
          style={{ marginBottom: "10px" }}
          className="red"
          value={this.props.id}
          onClick={e => this.props.delete(e.target.value)}
        >
          X
        </Button>
        {/* <ApptDeleteBtn
        key={this.props.all.id}
        id={this.props.all.id}
        /> */}
        <EmpApptUpdateModal
          key={this.props.all.phone}
          firstName={this.props.all.firstName}
          lastName={this.props.all.lastName}
          id={this.props.all.id}
          time={this.props.all.time}
          date={this.props.all.date}
          email={this.props.customer.email}
          street={this.props.customer.street}
          city={this.props.customer.city}
          state={this.props.customer.state}
          zip={this.props.customer.zip}
          telephone={this.props.customer.telephone}
        />
      </Card>
    );
  }
}
export default Appointment;
