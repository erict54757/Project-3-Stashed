import React, { Component } from "react";
import { Parallax } from "react-materialize";
import background1 from "../Images/background1.jpg";
import background2 from "../Images/background2.jpg";
import background3 from "../Images/background3.jpg";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import NewAppointment from "./newAppointment";
import CustContact from "./CustContact";
import "./Main.css";
// import API from "../utils/API";

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
          <div className="container">
            <div className="row">
              <div className="col s12 center" style={{ height: "300px" }}>
                {this.props.token ? (
                  <NewAppointment customerId={this.props.id} />
                ) : (
                  <div />
                )}
              </div>
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
