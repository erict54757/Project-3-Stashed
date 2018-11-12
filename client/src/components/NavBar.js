import React from "react";
import { Navbar, NavItem } from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import logo from "../Images/logo.jpg";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar brand={logo} right class="black" role="navigation">
        {/*<a id="logo-container" href="/" class="brand-logo">
            <img
              style={({ height: 55 }, { width: "auto" })}
              src={logo}
              alt="logo"
              srcset=""
            />
          </a> */}
        <NavItem>
          <a
            class="modal-trigger hideSign"
            href="#account-info"
            id="sign-in-modal"
          >
            SIGN-IN
          </a>
        </NavItem>
        <NavItem>
          <a class="modal-trigger hideSign" href="#account-signUp">
            SIGN-UP
          </a>
        </NavItem>
      </Navbar>
    );
  }
}

export default NavBar;
