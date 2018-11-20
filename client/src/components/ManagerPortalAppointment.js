import React, { Component } from "react";
import { Row, Col, CardPanel, Icon, Input } from "react-materialize";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";

class ManagerPortalAppointment extends Component {
  state = {
    date: moment().format("DD MMMM, YYYY"),
    Appointments: [],
    appt: [],
    Customers: [],
    filtered: []
  };
  render() {
    const filteredAppointments = this.state.Appointments.filter(appointment => {
      return (
        appointment.date === this.state.date &&
        appointment.EmployeeId === this.state.employee.id
      );
    });
    return (
      <CardPanel>
        <Row>
          <Col>
            <h4>Employee Schedule</h4>
          </Col>

          <Col className="date">
            {" "}
            <Input
              className="center "
              name="date"
              type="date"
              placeholder={this.state.date}
              value={this.state.date}
              onChange={this.handleInputChange}
            >
              <Icon>date_range</Icon>
            </Input>
          </Col>
        </Row>

        <Row className="center">
          <Col s={12} m={12} className="lighten-4 black-text">
            {filteredAppointments.length ? (
              <ul className="collection with-header">
                {filteredAppointments.map(appointment => (
                  <li className="collection-item" key={appointment.id}>
                    <div>
                      {appointment.CustomerId} {appointment.date}{" "}
                      {appointment.time}
                      <Link
                        to={"/Admin"}
                        onClick={() => this.deleteAppointment(appointment.id)}
                        className="secondary-content"
                      >
                        <i className="material-icons red-text">clear</i>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <h5>No Schedule to Display</h5>
            )}
          </Col>
        </Row>
      </CardPanel>
    );
  }
}

export default ManagerPortalAppointment;
