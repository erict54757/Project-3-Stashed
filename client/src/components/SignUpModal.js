import React, { Component } from "react";
import API from "../utils/API.js";
import { Modal, Button, Input, Row } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./SignUpModal.css";
class SignUpModal extends Component {
  initialstate = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    password: ""
  };

  state = this.initialstate;

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    API.saveCustomer({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      email: this.state.email,
      phone: this.state.phone,
      account_key: this.state.password
    })
      .then(res => console.log(res))
      .then(res => this.setState(this.initialstate))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Modal
          id="account-signUp"
          role="dialog"
          header="Create Your Account"
          trigger={<Button className="btn blue">Sign Up</Button>}
          actions={
            <div>
              <Button
                style={{ marginLeft: "5px" }}
                type="submit"
                waves="light"
                id="add-account"
                className="btn modal-close blue"
                onClick={this.handleFormSubmit}
              >
                Submit
              </Button>
              <Button className="blue" modal="close" waves="light">
                Close
              </Button>
            </div>
          }
        >
          <Row>
            <Input
              m={6}
              s={12}
              label="First Name"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              className="form-control"
              name="firstName"
              placeholder="John"
            />

            <Input
              m={6}
              s={12}
              label="Last Name"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              className="form-control"
              name="lastName"
              placeholder="Doe"
            />

            <Input
              m={12}
              s={12}
              label="Address"
              value={this.state.street}
              onChange={this.handleInputChange}
              className="form-control"
              name="street"
              placeholder="123 Rocky Rd."
            />

            <Input
              m={4}
              s={12}
              label="City"
              value={this.state.city}
              onChange={this.handleInputChange}
              className="form-control"
              name="city"
              placeholder="City"
            />

            <Input
              m={4}
              s={12}
              name="state"
              type="select"
              onChange={this.handleInputChange}
              className="modalDrop"
            >
              <option value="AL">Alabama</option>

              <option value="AK">Alaska</option>

              <option value="AZ">Arizona</option>

              <option value="AR">Arkansas</option>

              <option value="CA">California</option>

              <option value="CO">Colorado</option>

              <option value="CT"> Connecticut </option>

              <option value="DE"> Delaware </option>

              <option value="DC"> District Of Columbia </option>

              <option value="FL"> Florida </option>

              <option value="GA"> Georgia </option>

              <option value="HI"> Hawaii </option>

              <option value="ID"> Idaho </option>

              <option value="IL"> Illinois </option>

              <option value="IN"> Indiana </option>

              <option value="IA"> Iowa</option>

              <option value="KS">Kansas</option>

              <option value="KY">Kentucky</option>

              <option value="LA">Louisiana</option>

              <option value="ME">Maine</option>

              <option value="MD">Maryland</option>

              <option value="MA">Massachusetts</option>

              <option value="MI">Michigan</option>

              <option value="MN">Minnesota</option>

              <option value="MS">Mississippi</option>

              <option value="MO">Missouri</option>

              <option value="MT">Montana</option>

              <option value="NE">Nebraska</option>

              <option value="NV">Nevada</option>

              <option value="NH">New Hampshire</option>

              <option value="NJ">New Jersey</option>

              <option value="NM">New Mexico</option>

              <option value="NY">New York</option>

              <option value="NC">North Carolina</option>

              <option value="ND">North Dakota</option>

              <option value="OH">Ohio</option>

              <option value="OK">Oklahoma</option>

              <option value="OR">Oregon</option>

              <option value="PA">Pennsylvania</option>

              <option value="RI">Rhode Island</option>

              <option value="SC">South Carolina</option>

              <option value="SD">South Dakata</option>

              <option value="TN">Tennessee</option>

              <option value="TX">Texas</option>

              <option value="UT">Utah</option>

              <option value="VT">Vermont</option>

              <option value="VA">Virginia</option>

              <option value="WA">Washington</option>

              <option value="WV">West Virginia</option>

              <option value="WI">Wisconsin</option>

              <option value="WY">Wyoming</option>
            </Input>

            <Input
              m={4}
              s={12}
              label="Zip"
              value={this.state.zip}
              onChange={this.handleInputChange}
              className="form-control"
              name="zip"
              placeholder="12567"
            />

            <Input
              m={6}
              s={12}
              label="E-Mail"
              value={this.state.email}
              onChange={this.handleInputChange}
              className="form-control"
              name="email"
              placeholder="johndoe@email.com"
            />

            <Input
              m={6}
              s={12}
              label="Phone"
              type="text"
              value={this.state.phone}
              onChange={this.handleInputChange}
              className="form-control"
              name="phone"
              placeholder="704-123-4567"
            />
            <Input
              m={12}
              s={12}
              label="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              className="form-control"
              name="password"
              placeholder="Password"
            />
          </Row>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;
