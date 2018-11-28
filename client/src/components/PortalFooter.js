import React, { Component } from "react";

import "jquery";
import "materialize-css/dist/js/materialize.js";

import "./PortalFooter.css";
import logo from "../Images/logo.jpg";

class PortalFooter extends Component {
  render() {
    return (

<div   className='black footer'
>

<div className="container">
<div className="row">
  <div className="col l6 s12 center">
    <h5 className="white-text">Specializing In Classic Cuts</h5>
    <img
    style={{ height: "auto", width: "110px", padding: "5px" }}
    src={logo}
    />
  </div>
  <div class="col l4 offset-l2 s12">
                <h5 class="white-text">The HairCuttery</h5>
                <ul>
                  <li className="white-text">555 Node JS Ave</li>
                  <li className="white-text">Charlotte, NC 28262</li>
                  <li className="white-text"
                  type="telephone">715-555-5555</li>
              
                </ul>
              </div>
            </div>
          </div>
        
  
</div>
    );
  }
}
export default PortalFooter;
