import React, { Component } from 'react';
import { Navbar, NavItem } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import logo from "../Images/logo.jpg";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import "./NavBar.css"

class NavBar extends Component {
  render() {
    return (
      <Navbar 
       style={{height: "80px"}} className="black" brand={ <img
              style={({ height: "auto", width: "110px", padding: "5px"})}
              src={logo}
              alt="logo"
              srcset=""
    />}  
    right role="navigation">
      
        <NavItem>
         
          <SignInModal/>
        </NavItem>
        <NavItem>
          <SignUpModal/>
        </NavItem>
      </Navbar>
    );
  }
}

export default NavBar;
