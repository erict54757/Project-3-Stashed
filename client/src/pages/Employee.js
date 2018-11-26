import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
<<<<<<< HEAD
import "materialize-css/dist/css/materialize.css";
=======
>>>>>>> e10a4ab974c4aca1db5b406cd57543f4d69ef7b9

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
