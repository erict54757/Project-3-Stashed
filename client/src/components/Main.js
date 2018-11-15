import React, { Component } from "react";
import { Parallax } from "react-materialize";
import background1 from "../Images/background1.jpg";
import background2 from "../Images/background2.jpg";
import background3 from "../Images/background3.jpg";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class Main extends Component {
  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <br />
              <h1 className="header center grey-text text-lighten-3">
                The HairCuttery
              </h1>
              <div className="row center">
                <h5 className="header col s12 light">A Cut Above The Rest.</h5>
              </div>

              <br />
              <br />
            </div>
          </div>
        </div>
        <Parallax imageSrc={background1} />

        <div className="parallax-container valign-wrapper">
          <div className="container">
            <div className="section no-pad-bit">
              <div className="row">
                <div className="col s12 center">
                  <h5 className="header light m-5">
                    Specializing In Classic Cuts.
                  </h5>
                  <div className="row">
                    <div className="col s2"></div>
                    <div className="col s4">
                      <SignInModal />
                    </div>
                    <div className="col s4">
                      <SignUpModal />
                    </div>
                    <div className="col s2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Parallax imageSrc={background2} />

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center">
                <h3>
                  <i className="mdi-content-send brown-text" />
                </h3>
                <h4>Contact Us</h4>
                <p className="left-align light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam scelerisque id nunc nec volutpat. Etiam pellentesque
                  tristique arcu, non consequat magna fermentum ac. Cras ut
                  ultricies eros. Maecenas eros justo, ullamcorper a sapien id,
                  viverra ultrices eros. Morbi sem neque, posuere et pretium
                  eget, bibendum sollicitudin lacus. Aliquam eleifend
                  sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet
                  semper molestie. Morbi massa odio, condimentum sed ipsum ac,
                  gravida ultrices erat. Nullam eget dignissim mauris, non
                  tristique erat. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia Curae;
                </p>
              </div>
            </div>
          </div>
        </div>

        <Parallax imageSrc={background3} />
      </div>
    );
  }
}

export default Main;
