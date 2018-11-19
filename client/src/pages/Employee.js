import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import NavBarCust from "../components/NavBarCust";

import NavBar from "../components/NavBar";
import PortalContainer from "../components/PortalContainer";
import PortalFooter from "../components/PortalFooter";
import Customer from "../pages/Customer"



class Employee extends Component {
  state = {
    isEmployee: false,
    isLoggedIn: true,
    user: {
      id: 1,
      name: "Eric"
    }
  };
  render() {
    return (
      <div>
        {this.state.isLoggedIn && this.state.isEmployee || this.state.isAdmin && this.state.isLoggedIn ? [<NavBar user={this.state.user} background={"black"} />, <PortalContainer user={this.state.user} />,
        <PortalFooter user={this.state.user} />] : <Customer background={"white"} />}
      </div>
    );
  }
}
export default Employee
