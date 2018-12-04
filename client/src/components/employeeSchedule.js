import React from "react";
import { Row, Col, Icon, Input } from "react-materialize";
import moment from "moment";
import EmployeeScheduleModal from "./employeeScheduleModal";
// import { Link, Route } from "react-router-dom";
import "jquery";
import Appointment from "./DumbApptCard";
import "materialize-css/dist/js/materialize.js";
import "./employeeScheduleModal.css";
import "./employeeSchedule.css";
import API from "../utils/API";

class EmployeeSchedule extends React.Component {
  state = {
    date: moment().format("DD MMMM, YYYY"),
    appointments: [],
    customers: []
  };

  getAppointments = () => {
    API.getAppointments()
      .then(res => this.setState({ appointments: res.data }))
      .catch(err => console.log(err));
  };

  getCustomers = () => {
    API.getCustomers()
      .then(res => this.setState({ customers: res.data }))
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

  deleteAppointment = id => {
    API.deleteAppointment(id)
      .then(res => this.getAppointments())
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getAppointments();
    this.getCustomers();
  }

  render() {
    const filteredAppointments = this.state.appointments.filter(appointment => {
      return appointment.date === this.state.date;
    });

    console.log(this.state);

    return (
      <div>
      <div className="container">
        <Row>
          <Col className="addCol">
            <EmployeeScheduleModal
              id={this.props.id}
              getAppointments={this.getAppointments}
              getCustomers={this.getCustomers}
            />
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
</div>
        <Row
          className="center"
          style={{ paddingLeft: "3%", paddingRight: "3%" }}
        >
          {filteredAppointments.length ? (
            filteredAppointments.map(appointment => (
              <div className="col s12 m6 l4 center" key={appointment.id}>
                <Appointment
                  customers={this.state.customers}
                  id={appointment.id}
                  CustId={appointment.CustomerId}
                  EmpId={appointment.EmployeeId}
                  time={appointment.time}
                  date={appointment.date}
                  getAppointments={this.getAppointments}
                  getCustomers={this.getCustomers}
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
