import React, { Component } from "react";
import API from "../utils/API";
import "jquery";
import "materialize-css/dist/js/materialize.js";

import NavBar from "../components/NavBar";
import NavBarCust from "../components/NavBarCust";
import Main from "../components/Main";
import Foot from "../components/Foot";

class Customer extends Component {
  render() {
    return (
      <div>
        {this.props.token ? (
          <NavBar
            name={this.props.name}
            id={this.props.id}
            background={"white"}
            textColor={"black-text"}
          />
        ) : (
          <NavBarCust background={"white black-text"} />
        )}
        <Main token={this.props.token} id={this.props.id} />
        <Foot />
      </div>
    );
  }
}
export default Customer;
