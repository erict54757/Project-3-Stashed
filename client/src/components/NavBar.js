import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";

import logo from "../Images/logo.jpg";
import "./NavBar.css";
import LogoutButton from "./LogoutButton";
import WelcomeMat from "./WelcomeMat";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        style={{ height: "80px" }}
        className={this.props.background}
        brand={
          <img
            style={{ height: "auto", width: "110px", padding: "5px" }}
            src={logo}
            alt="logo"
          />
        }
        right
        role="navigation"
      >
        <NavItem>
          <WelcomeMat name={this.props.name} textColor={this.props.textColor} />
        </NavItem>

        <NavItem>
          <LogoutButton id={this.props.id} />
        </NavItem>
      </Navbar>
    );
  }
}

export default NavBar;
