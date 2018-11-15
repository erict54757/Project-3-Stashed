import React from "react";
import Footer from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class Foot extends React.Component {
  render() {
    return (
      <Footer class="page-footer white">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="black-text center">Company Bio</h5>
              <p class="grey-text text-darken-3 ">
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
            <div class="col l3 s12" />
            <div class="col l3 s12 ">
              <h5 class="black-text center">Connect</h5>
              <div class="center col s12">
                <div class=" col l4 s4 ">
                  <a href="#" style="font-size: 40px;" class="fa fa-facebook" />
                </div>
                <div class=" col l4 s4">
                  <a href="#" style="font-size: 40px;" class="fa fa-twitter" />
                </div>
                <div class=" col l4 s4">
                  <a href="#" style="font-size: 40px;" class="fa fa-youtube" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container center">
            <a class="black-text text-lighten-3 modal-trigger" href="#Employee">
              Employee Login
            </a>
          </div>
        </div>
      </Footer>
    );
  }
}

export default Foot;
