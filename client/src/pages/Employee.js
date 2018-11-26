import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";

import NavBar from "../components/NavBar";
import PortalContainer from "../components/PortalContainer";
import PortalFooter from "../components/PortalFooter";
import Customer from "../pages/Customer";

class Employee extends Component {
  render() {
    return (
      <div>
        <NavBar
          key={"1"}
          token={this.props.token}
          name={this.props.name}
          id={this.props.id}
          background={"black"}
          textColor={"white-text"}
        />

        <PortalContainer
          token={this.props.token}
          name={this.props.name}
          id={this.props.id}
          key={"2"}
        />

        <PortalFooter />
      </div>
    );
  }
}
export default Employee;
