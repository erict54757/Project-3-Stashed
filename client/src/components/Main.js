import React, { Component } from "react";
import { Parallax } from "react-materialize";
import background1 from "../Images/background1.jpg";
import background2 from "../Images/background2.jpg";
import background3 from "../Images/background3.jpg";
import background5 from "../Images/background5.jpg";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import NewAppointment from "./newAppointment";
import CustContact from "./CustContact"
import "./Main.css"
class Main extends Component {
  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">

          <h1 className="header center grey-text text-lighten-3">
            The HairCuttery
              </h1>
          <div className="row center">
            <h4 className="header col s12 grey-text text-lighten-3 light">A Cut Above The Rest.</h4>
          </div>


        </div>
        <Parallax imageSrc={background1}

        />

        <div className="parallax-container valign-wrapper appoint">
          <div className="container">

            <div className="row">
              <div className="col s12 center">
                <h5 className="header black-text text-lighten-3 light m-5 ">
                  Sign-In To Make A New Appointment.
                  </h5>
                <NewAppointment />
              </div>
            </div>

          </div>
        </div>
        <h4 className="header center grey-text text-lighten-3 light m-5 special">
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
