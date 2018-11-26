import React, { Component } from "react";
import { Footer } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./PortalFooter.css";

class PortalFooter extends Component {
  render() {
    return <Footer className="black footer" />;
  }
}
export default PortalFooter;
