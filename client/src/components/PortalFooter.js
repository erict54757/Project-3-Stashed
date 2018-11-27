import React, { Component } from "react";
import { Footer } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";

import "./PortalFooter.css";
import logo from "../Images/logo.jpg";

class PortalFooter extends Component {
// <<<<<<< HEAD

//   render(){
//       return(
  
  
//   <div   className='black footer page-footer'
//   >
  
//   <div className="container">
//   <div className="row">
//     <div className="col l6 s12 center">
//       <h5 className="white-text">Specializing In Classic Cuts</h5>
//       <img
//       style={{ height: "auto", width: "110px", padding: "5px" }}
//       src={logo}
//       />
//     </div>
//     <div class="col l4 offset-l2 s12">
//                   <h5 class="white-text">Charlotte Barber & Beard</h5>
//                   <ul>
//                     <li className="white-text">1200 The Plaza Suite B</li>
//                     <li className="white-text">Charlotte, NC 28205</li>
//                     <li className="white-text"
//                     type="telephone">(704) 595-7795</li>
                
//                   </ul>
//                 </div>
//               </div>
// =======
  render() {
    return (
      <div className="black footer page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12 center">
              <h5 style={{marginTop: "20px"}} class="white-text">Charlotte Barber & Beard</h5>
            </div>
            <div className="col l6 s12 center">
              <img
                style={{ height: "auto", width: "110px", padding: "5px" }}
                src={logo}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PortalFooter;
