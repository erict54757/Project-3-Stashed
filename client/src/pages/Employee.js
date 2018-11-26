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
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn,
      user: props.user,
      isEmployee: true
    };
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn && this.state.isEmployee ? (
          [
            <NavBar
              key={"1"}
              user={this.props.user}
              background={"black"}
              textColor={"white-text"}
            />,
            <PortalContainer user={this.props.user} key={"2"} />,
            <PortalFooter />
          ]
        ) : (
          <Customer
            key={"1"}
            {...this.props}
            background={"white"}
            textColor={"black-text"}
          />
        )}
      </div>
    );
  }
}
export default Employee;
