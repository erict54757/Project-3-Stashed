import React, { Component } from "react";
import { Row, Col, Tab, Tabs } from "react-materialize";
import ManagerPortal from "./managerPortal";

// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class PortalContainer extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Tabs className="tab-demo z-depth-1">
            <Tab title="View Check Ins">View Check Ins</Tab>
            <Tab title="Checked In" active>
              Checked In
            </Tab>
            <Tab title="Employee">Employee</Tab>
            <Tab title="Admin">Admin</Tab>
          </Tabs>

          <ManagerPortal />
        </Row>
      </div>
    );
  }
}
export default PortalContainer;
