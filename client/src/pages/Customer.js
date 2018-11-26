import React, { Component } from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import NavBar from "../components/NavBar";
import NavBarCust from "../components/NavBarCust";
import Main from "../components/Main";
import Foot from "../components/Foot";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn,
      user: props.user
    };
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <NavBar
            user={this.props.user}
            background={"white"}
            textColor={"black-text"}
          />
        ) : (
          <NavBarCust background={"white black-text"} />
        )}
        <Main isLoggedIn={this.props.isLoggedIn} user={this.props.user} />
        <Foot />
      </div>
    );
  }
}
export default Customer;
