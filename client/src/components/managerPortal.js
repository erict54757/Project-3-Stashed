import React, { Component } from "react";
import { Row, Col, CardPanel, Input, Icon } from "react-materialize";
import ManagerPortalModal from "./managerPortalModal";
// import { Link } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import moment from "moment";
import API from "../utils/API";
import "./managerPortal.css"

class ManagerPortal extends Component {
  state = {
    date: moment().format("DD MMMM, YYYY"),
    Appointments: [],
    appt: [],
    Customers: [],
    filtered: [],
    employees: [],
    employee: []
  };

  componentDidMount() {
    this.loadEmployees();
    this.loadAppointments();
  }

  loadEmployees = () => {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  };

  changeEmployee = employee => {
    this.setState({ employee: employee });
  };

  deleteEmployee = id => {
    API.deleteEmployee(id)
      .then(res => {
        this.loadEmployees();
      })
      .catch(err => console.log(err));
  };

  // Updating employees appointments
  // ====================================================================

  loadAppointments = () => {
    API.getAppointments()
      .then(res => this.setState({ Appointments: res.data }))
      .catch(err => console.log(err));
  };

  deleteAppointment = id => {
    API.deleteAppointment(id)
      .then(res => this.loadAppointments())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    console.log(this.state.filtered);
    // Updating the input's state
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    const filteredAppointments = this.state.Appointments.filter(appointment => {
      return (
        appointment.date === this.state.date &&
        appointment.EmployeeId === this.state.employee.id
      );
    });
    return (
      <div className="container ">
        <div
          className="row z-depth-5 manager"
          style={{ marginTop: "25px", marginBottom: "25px" }}
        >
          <ul id="tabs-swipe-demo" className="tabs black white-text managerTabs z-depth-5">
            <li className="tab col s3">
              <a className="white-text" href="#employeeInfo">
                Employee Information
              </a>
            </li>
            <li className="tab col s3">
              <a className="white-text" href="#employeeSchedule">
                Employee Schedule
              </a>
            </li>
          </ul>
          <div>
            <Row>
              <Col style={{ marginLeft: "5px", marginTop: "10px" }}>
                <ManagerPortalModal loadEmployees={this.loadEmployees} />
              </Col>
            </Row>

            <Row>
              <Col
                s={12}
                m={3}
                style={{ marginLeft: "5px" }}
                className="lighten-4 black-text"
              >
                {this.state.employees.length ? (
                  <ul className="collection with-header">
                    <li className="collection-header blue white-text">
                      <h5>Employees</h5>
                    </li>
                    {this.state.employees.map(employee => (
                      <li className="collection-item" key={employee.id}>
                        <div
                          onClick={() => this.changeEmployee(employee)}
                          href={"/employees/" + employee.id}
                        >
                          {employee.first_name} {employee.last_name}
                          <span
                            onClick={() => this.deleteEmployee(employee.id)}
                            className="secondary-content"
                          >
                            <i className="material-icons red-text">clear</i>
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No Employees to Display</p>
                )}
              </Col>

              <Col
                s={12}
                m={8}
                id="employeeInfo"
                className="lighten-4 black-text"
              >
                <CardPanel>
                  {this.state.employee ? (
                    <div>
                      <h4>Employee Information</h4>
                      <p>
                        Name: {this.state.employee.first_name}{" "}
                        {this.state.employee.last_name}
                      </p>
                      <p>Phone: {this.state.employee.phone}</p>
                      <p>E-Mail: {this.state.employee.email}</p>
                      <p>
                        Address: {this.state.employee.street}{" "}
                        {this.state.employee.city} {this.state.employee.state}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p>Name:</p>
                      <p>Phone:</p>
                      <p>E-Mail:</p>
                      <p>Address:</p>
                    </div>
                  )}
                </CardPanel>
              </Col>
              <Col
                s={12}
                m={8}
                id="employeeSchedule"
                className="lighten-4 black-text"
              >
                <CardPanel>
                  <Row>
                    
                      <h4>Employee Schedule</h4>
                    

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
                            <li
                              className="collection-item"
                              key={appointment.id}
                            >
                              <div>
                                {appointment.CustomerId} {appointment.date}{" "}
                                {appointment.time}
                                <span
                                
                                  onClick={() =>
                                    this.deleteAppointment(appointment.id)
                                  }
                                  className="secondary-content"
                                >
                                  <i className="material-icons red-text">
                                    clear
                                  </i>
                                </span>
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
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default ManagerPortal;
