import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "./Admin.css";

import NavBar from "../components/NavBar";
import ManagerPortal from "../components/managerPortal";
import PortalFooter from "../components/PortalFooter";
import Customer from "../pages/Customer";

class Admin extends Component {
  render() {
    return (
      <div>
        {this.props.token && this.props.name === "Admin" ? (
          [
            <NavBar
              name={this.props.name}
              id={this.props.id}
              background={"black"}
            />,
            <ManagerPortal
              name={this.props.name}
              id={this.props.id}
              token={this.props.token}
            />,
            <PortalFooter />
          ]
        ) : (
          <Customer token={this.props.token} background={"white"} />
        )}
      </div>
    );
  }
}
export default Admin;
