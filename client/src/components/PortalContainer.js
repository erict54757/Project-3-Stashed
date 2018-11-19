import React, { Component } from "react";
import { Row, Col, Tab, Tabs } from "react-materialize";
import EmployeeSchedule from "./employeeSchedule";
import NewAppointment from "./newAppointment";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./PortalContainer.css";

class PortalContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className=" row z-depth-5" style={{ marginTop: "25px" }}>
          <Tabs style={{ color: "black" }} className="white-text z-depth-1">
            <Tab
              className="blue rounded white-text"
              title="Employee Information"
            />
            <Tab
              className="blue rounded white-text"
              title="Employee Schedule"
            />
          </Tabs>
          {/*  insert the appropriate manager component here */}
          <EmployeeSchedule />
        </div>
      </div>
    );
  }
}
export default PortalContainer;
