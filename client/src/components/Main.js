import React, { Component } from "react";
import { Parallax } from "react-materialize";
import background1 from "../Images/background1.jpg";
import background2 from "../Images/background2.jpg";
import background3 from "../Images/background3.jpg";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import Map from "./GoogleMapComponent/Map";
import NewAppointment from "./newAppointment";
import CustContact from "./CustContact";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <h1 className="header center grey-text text-lighten-3">
            The HairCuttery
          </h1>
          <div className="row center">
            <h4 className="header col s12 grey-text text-lighten-3 light">
              A Cut Above The Rest.
            </h4>
          </div>
        </div>
        <Parallax imageSrc={background1} />

        <div className="parallax-container valign-wrapper appoint">
          <div className="container fluid">
            <div className="row fluid">
              {this.state.isLoggedIn ? (
                <div>
                  <div
                    className="col m4 s12 center"
                    style={{ height: "200px" }}
                  >
                    <NewAppointment customerId={this.props.id} />
                  </div>
                  <div className="col m4 s12 center">
                    <Map />
                  </div>
                  <div className="col m4 s12 center">
                    <h4>Charlotte Barber & Beard</h4>
                    <p>Address: 1200 The Plaza Suite B, Charlotte, NC 28205</p>
                    <p>Phone: (704) 595-7795</p>
                    <p>
                      Hours:
                      <p>
                        <strong>Sunday-Monday</strong>
                        {"  "}Closed
                      </p>
                      <p>
                        <strong>Tuesday-Friday</strong>
                        {"  "}10AM-6PM
                      </p>
                      <p>
                        <strong>Saturday</strong>
                        {"  "}9AM-4PM
                      </p>
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    className="col sm s12 center"
                    style={{ marginTop: "10px" }}
                  >
                    <Map />
                  </div>
                  <div className="col m6 s12 center">
                    <h4>Charlotte Barber & Beard</h4>
                    <p>Address: 1200 The Plaza Suite B, Charlotte, NC 28205</p>
                    <p>Phone: (704) 595-7795</p>
                    <p>
                      Hours:
                      <p>
                        <strong>Sunday-Monday</strong>
                        {"  "}Closed
                      </p>
                      <p>
                        <strong>Tuesday-Friday</strong>
                        {"  "}10AM-6PM
                      </p>
                      <p>
                        <strong>Saturday</strong>
                        {"  "}9AM-4PM
                      </p>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <h4 className="header center grey-text text-lighten-3 light special">
          Specializing In Classic Cuts.
        </h4>
        <Parallax imageSrc={background2} />

        <CustContact />

        <Parallax imageSrc={background3} />
      </div>
    );
  }
}

export default Main;
