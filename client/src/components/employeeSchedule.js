import React from "react";
import { Row, Col, Icon, Input } from "react-materialize";
import moment from "moment";
import EmployeeScheduleModal from "./employeeScheduleModal";
// import { Link, Route } from "react-router-dom";
import "jquery";
import Appointment from "./DumbApptCard";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./employeeScheduleModal.css";
import "./employeeSchedule.css";
import API from "../utils/API";

class EmployeeSchedule extends React.Component {
  state = {
    date: moment().format("DD MMMM, YYYY"),
    appointments: [],
    customers: []
  };

  deleteAppointment = id => {
    API.deleteAppointment(id)
      .then(res => this.getAppointments())
      .catch(err => console.log(err));
  };

  getAppointments = () => {
    API.getAppointments()
      .then(res => this.setState({ appointments: res.data }))
      .then(res => console.log("state after appt", this.state))
      .catch(err => console.log(err));
  };

  getCustomers = () => {
    API.getCustomers()
      .then(res => this.setState({ customers: res.data }))
      .then(res => console.log("state after cust", this.state))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.getAppointments();
    this.getCustomers();
  }

  render() {
    const filteredAppointments = this.state.appointments.filter(appointment => {
      return appointment.date === this.state.date;
    });

    setTimeout(() => {
      console.log(filteredAppointments);
    }, 2000);

    return (
      <div className="container">
        <Row>
          <Col className="addCol">
            <EmployeeScheduleModal />
          </Col>
        </Row>
        <Row>
          <Col className="inputDate ">
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

        <Row
          className="center"
          style={{ paddingLeft: "3%", paddingRight: "3%" }}
        >
          {filteredAppointments.length ? (
            filteredAppointments.map(appointment => (
              <div className="col s12 m6 l4">
                <Appointment
                  customers={this.state.customers}
                  key={appointment.id}
                  id={appointment.id}
                  CustId={appointment.CustomerId}
                  time={appointment.time}
                  date={appointment.date}
                  getAppointments={this.getAppointments}
                />
              </div>
            ))
          ) : (
            <div className="container">
              <h3>No Scheduled Appointments For This Day</h3>
            </div>
          )}
        </Row>
      </div>
    );
  }
}

export default EmployeeSchedule;
