import React, { Component } from "react";
import { Row, Button, Col, CardPanel } from "react-materialize";
import ManagerPortalModal from "./managerPortalModal";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class ManagerPortal extends Component {
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
            <ul className="collection with-header">
              <li className="collection-header">
                <h4>Employees</h4>
              </li>
              <li className="collection-item">
                <div>
                  Alvin<a href="#" onClick={() => console.log("delete this employee")} className="secondary-content"><i className="material-icons red-text">clear</i></a>
                </div>
              </li>
              <li className="collection-item">
                <div>
                  Andrew<a href="#" onClick={() => console.log("delete this employee")} className="secondary-content"><i className="material-icons red-text">clear</i></a>
                </div>
              </li>
              <li className="collection-item">
                <div>
                  Nicole<a href="#" onClick={() => console.log("delete this employee")} className="secondary-content"><i className="material-icons red-text">clear</i></a>
                </div>
              </li>
              <li className="collection-item">
                <div>
                  Eric<a href="#" onClick={() => console.log("delete this employee")} className="secondary-content"><i className="material-icons red-text">clear</i></a>
                </div>
              </li>
            </ul>
          </Col>

          <Col s={12} m={8} className="lighten-4 black-text">
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
