import React, { Component } from "react";
import { Row, Button, Col, CardPanel } from "react-materialize";
import ManagerPortalModal from "./managerPortalModal";
// import { Link } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import API from "../utils/API";

class ManagerPortal extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  };

  deleteEmployee = id => {
    console.log("something");
    API.deleteEmployee(id)
      .then(res => this.loadEmployees())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Row>
          <Col style={{ marginLeft: "5px" }}>
            <ManagerPortalModal />
          </Col>
        </Row>

        <Row>
          <Col s={12} m={3} className="lighten-4 black-text">
            {this.state.employees.length ? (
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Employees</h4>
                </li>
                {this.state.employees.map(employee => (
                  <li className="collection-item" key={employee.id}>
                    <div>
                      {/* <Link to={"/employees/" + employee.id}> */}
                        {employee.first_name} {employee.last_name}
                      {/* </Link> */}
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

          <Col s={12} m={9} className="lighten-4 black-text">
            <CardPanel>
              <p>Name:</p>
              <p>Phone:</p>
              <p>E-Mail:</p>
              <p>Address:</p>
            </CardPanel>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ManagerPortal;
