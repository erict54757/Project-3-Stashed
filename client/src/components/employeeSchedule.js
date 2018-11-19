import React, { Component } from "react";
import {
  Row,
  Carousel,
  Col,
  Collection,
  CollectionItem,
  Icon,
  Input,
  Badge
} from "react-materialize";
import EmployeeScheduleModal from "./employeeScheduleModal";
// import { Link, Route } from "react-router-dom";
import "jquery";
import Appointment from "./DumbApptCard";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./employeeScheduleModal.css";
import "./employeeSchedule.css";
class EmployeeSchedule extends React.Component {
  state = {
    appointments: [
      {
        id: 1,
        time: "8:30",
        firstName: "eric",
        lastName: "taft",
        email: "erict54757@gmail.com",
        telephone: 7153799917,
        street: "9518 grove hill dr",
        city: "charlotte",
        state: "nc",
        zip: 28262,
        password: "password",
        date: "01/01/2019"
      },
      {
        id: 1,
        time: "8:30",
        firstName: "eric",
        lastName: "taft",
        email: "erict54757@gmail.com",
        telephone: 7153799917,
        street: "9518 grove hill dr",
        city: "charlotte",
        state: "nc",
        zip: 28262,
        password: "password",
        date: "01/01/2019"
      },
      {
        id: 1,
        time: "8:30",
        firstName: "eric",
        lastName: "taft",
        email: "erict54757@gmail.com",
        telephone: 7153799917,
        street: "9518 grove hill dr",
        city: "charlotte",
        state: "nc",
        zip: 28262,
        password: "password",
        date: "01/01/2019"
      },
      {
        id: 1,
        time: "8:30",
        firstName: "eric",
        lastName: "taft",
        email: "erict54757@gmail.com",
        telephone: 7153799917,
        street: "9518 grove hill dr",
        city: "charlotte",
        state: "nc",
        zip: 28262,
        password: "password",
        date: "01/01/2019"
      }
    ]
  };

  render() {
    return (
      <div>
        <Row>
          <Row>
            <Col>
              <EmployeeScheduleModal />
            </Col>
          </Row>

          <Col className="inputDate ">
            {" "}
            <Input
              className="center "
              name="on"
              type="date"
              placeholder="Pick A Date"
              value={this.state.date}
              onChange={this.handleInputChange}
            >
              <Icon>date_range</Icon>
            </Input>
          </Col>
        </Row>

        <Row
          className="right"
          style={{ paddingLeft: "3%", paddingRight: "3%" }}
        >
          {this.state.appointments.map(appointment => (
            <div className="col s12 m6 l4">
              <Appointment
                id={appointment.id}
                time={appointment.time}
                name={appointment.name}
              />
            </div>
          ))}
        </Row>
      </div>
    );
  }
}

export default EmployeeSchedule;
