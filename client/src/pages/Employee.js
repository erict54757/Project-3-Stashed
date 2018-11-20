import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

import NavBar from "../components/NavBar";
import PortalContainer from "../components/PortalContainer";
import PortalFooter from "../components/PortalFooter";
import Customer from "../pages/Customer";

class Employee extends Component {
  state = {
    isEmployee: true,
    isLoggedIn: true,
    user: {
      id: 1,
      name: "Eric"
    }
  };
  render() {
    return (
      <div>
        {(this.state.isLoggedIn && this.state.isEmployee) ||
        (this.state.isAdmin && this.state.isLoggedIn) ? (
          [
            <NavBar user={this.state.user} background={"black"} textColor={"white-text"} />,
            <PortalContainer user={this.state.user} />,
            <PortalFooter user={this.state.user} />
          ]
        ) : (
          <Customer background={"white"} textColor={"black-text"} />
        )}
      </div>
    );
  }
}
export default Employee;
