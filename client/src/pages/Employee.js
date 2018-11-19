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

class Employee extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PortalContainer />
        <PortalFooter />
      </div>
    );
  }
}
export default Employee;
