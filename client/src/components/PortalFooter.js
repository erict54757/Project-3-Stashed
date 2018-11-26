import React, { Component } from "react";
import { Footer } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";


import "./PortalFooter.css"
import logo from "../Images/logo.jpg";




class PortalFooter extends Component {
  render() {
    return <Footer className="black footer" />;
  }
}
export default PortalFooter;
