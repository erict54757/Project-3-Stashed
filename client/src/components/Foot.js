import React, { Component } from 'react';
import {Footer} from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class Foot extends React.Component {
  render() {
    return (
      <div className="page-footer white">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="black-text center">Company Bio</h5>
              <p className="grey-text text-darken-3 ">
                The HairCuttery Barbershop & Co. is a classic upscale
                barbershop. We offer a variety of services, catering to
                everyone. The HairCuttery is a gentleman's shop, reminiscent of
                the classic barbershop. We are striving to bring the memories
                back, with solely the clientele in mind. People pay for quality
                - The HairCuttery is where you will get it. We are barbers who
                love our craft, providing top notch service that helps men Stay
                Sharp..
              </p>
            </div>
            <div className="col l3 s12" />
            <div className="col l3 s12 ">
              <h5 className="black-text center">Connect</h5>
              <div className="center col s12">
                <div className=" col l4 s4 ">
                  <a href="" style={{fontSize: "40px"}} className="fa fa-facebook" />
                </div>
                <div className=" col l4 s4">
                  <a href="" style={{fontSize: "40px"}} className="fa fa-twitter" />
                </div>
                <div className=" col l4 s4">
                  <a href="" style={{fontSize: "40px"}} className="fa fa-youtube" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container center">
            <a className="black-text text-lighten-3 modal-trigger" href="#Employee">
              Employee Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Foot;
