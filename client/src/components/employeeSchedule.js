import React, { Component } from 'react';
import { Row, Carousel} from "react-materialize";
import EmployeeScheduleModal from "./employeeScheduleModal";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class EmployeeSchedule extends Component {
  render() {
    return (
      <div>
        <Row>
          <EmployeeScheduleModal />
        </Row>

        <Row>
          <Carousel options={{ fullWidth: false }}>
            <div className="green">
              <h2>First Panel</h2>
              <p className="white-text">This is your first panel</p>
            </div>
            <div className="red">
              <h2>Second Panel</h2>
              <p className="white-text">This is your second panel</p>
            </div>
            <div className="green">
              <h2>Third Panel</h2>
              <p className="white-text">This is your third panel</p>
            </div>
            <div className="amber">
              <h2>Fourth Panel</h2>
              <p className="white-text">This is your fourth panel</p>
            </div>
          </Carousel>
        </Row>
      </div>
    );
  }
}

export default EmployeeSchedule;