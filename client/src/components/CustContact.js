import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";

// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";

import "./CustContact.css";

class CustContact extends Component {
  state = {
    subject: "",
    message: "",
    email: "",
    phoneNumber: ""
  };

  handleInputChange = event => {
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handleSendEmail = event => {
    event.preventDefault();
    // this.sendEmail(this.state);
  };
  render() {
    return (
      <div className="container ">
        <Row className="center">
          <h3>
            <i className="mdi-content-send brown-text" />
          </h3>
          <h4 className="center">Contact Us</h4>

          <div className="col l8 m8 s12 offset-l2 offset-m2 center formEmail">
            <div className="form-group">
              <Input
                s={12}
                className="rounded form-control"
                type="text"
                name="subject"
                value={this.state.subject}
                maxLength="30"
                onChange={this.handleInputChange}
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                value={this.state.message}
                name="message"
                type="text"
                placeholder="Message"
                id="message"
                maxLength="140"
                rows="20"
                onChange={this.handleInputChange}
              />
              <span className="section scrollspy">
                <p id="characterLeft" className="help-block ">
                  You have {140 - this.state.message.length} characters left.
                </p>
              </span>
            </div>

            {/* <!-- set the reply-to address --> */}
            <Row>
              <Input
                s={6}
                className="rounded form-control"
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={this.handleInputChange}
              />

              <Input
                s={6}
                className="rounded form-control"
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={this.handleInputChange}
              />
            </Row>

            <Button
              className="btn waves-effect waves-blue blue"
              type="submit"
              name="Submit"
              onClick={this.handleSendEmail}
            >
              Submit
            </Button>
          </div>
        </Row>
      </div>
    );
  }
}
export default CustContact;
