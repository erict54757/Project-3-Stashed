import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";


import NavBar from "../components/NavBar";
import ManagerPortal from "../components/managerPortal";
import PortalFooter from "../components/PortalFooter";
import Customer from "../pages/Customer";

class Admin extends Component {
  state = {
    isAdmin: true,
    isLoggedIn: true,
    user: {
      id: 1,
      name: "Eric"
    }
  };
  render() {
    return (
      <div>
        {(this.state.isLoggedIn && this.state.isAdmin) ||
        (this.state.isAdmin && this.state.isLoggedIn) ? (
          [
            <NavBar user={this.state.user} background={"black"} />,
            <ManagerPortal user={this.state.user} />,
            <PortalFooter user={this.state.user} />
          ]
        ) : (
          <Customer background={"white"} />
        )}
      </div>
    );
  }
}
export default Admin;
