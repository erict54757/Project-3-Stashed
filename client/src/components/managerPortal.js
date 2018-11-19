import React, { Component } from "react";
import { Row,  Col, CardPanel } from "react-materialize";
import ManagerPortalModal from "./managerPortalModal";
// import { Link } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import API from "../utils/API";

class ManagerPortal extends Component {
  state = {
    employees: [],
    employee: []
  };

  componentDidMount() {
    this.loadEmployees();
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
      .then(res => this.loadEmployees())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="row z-depth-5" style={{ marginTop: "25px", marginBottom: "25px" }}>
          <ul id="tabs-swipe-demo" className="tabs black white-text">
            <li className="tab col s3">
              <a className="active white-text" href="#employeeInfo">
                Employee Information
              </a>
            </li>
            <li className="tab col s3">
              <a className="white-text" href="#employeeSchedule">Employee Schedule</a>
            </li>
          </ul>
          <div>
            <Row>
              <Col style={{ marginLeft: "5px", marginTop: "10px" }}>
                <ManagerPortalModal loadEmployees={this.loadEmployees} />
              </Col>
            </Row>

            <Row>
              <Col s={12} m={3} style={{ marginLeft: "5px" }} className="lighten-4 black-text">
                {this.state.employees.length ? (
                  <ul className="collection with-header">
                    <li className="collection-header blue white-text">
                      <h4>Employees</h4>
                    </li>
                    {this.state.employees.map(employee => (
                      <li className="collection-item" key={employee.id}>
                        <div onClick={() => this.changeEmployee(employee)}>
                          {employee.first_name} {employee.last_name}
                          <a
                            href={"/employees/" + employee.id}
                            onClick={() => this.deleteEmployee(employee.id)}
                            className="secondary-content"
                          >
                            <i className="material-icons red-text">clear</i>
                          </a>
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
                  
                      <h4>Employee Schedule</h4>
                    
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
