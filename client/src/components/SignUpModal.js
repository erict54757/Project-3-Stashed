import React, { Component } from "react";
import API from "../utils/API.js";
import { Modal, Button, NavItem, Dropdown, Input } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./SignUpModal.css";
class SignUpModal extends Component {
  state = {
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
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Modal
        id="account-signUp"
        role="dialog"
        header="Create Your Account"
        trigger={<Button className="btn blue">Sign Up</Button>}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form id="create-form">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputFirst">First Name</label>
                    <input
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                      className="form-control"
                      name="firstName"
                      placeholder="John"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputLast">Last Name</label>
                    <input
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                      className="form-control"
                      name="lastName"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail">Email</label>
                    <input
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPhone">Phone</label>

                    <input
                      value={this.state.phone}
                      onChange={this.handleInputChange}
                      className="form-control"
                      name="phone"
                      placeholder="4155551234"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label for="inputStreet">Street</label>
                  <input
                    value={this.state.street}
                    onChange={this.handleInputChange}
                    className="form-control"
                    name="street"
                    placeholder="1234 Your St"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input
                      value={this.state.city}
                      onChange={this.handleInputChange}
                      className="form-control"
                      name="city"
                      placeholder="Your City"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <input
                      value={this.state.state}
                      onChange={this.handleInputChange}
                      className="form-control"
                      name="state"
                      placeholder="Your State"
                    />

                    {/* <Dropdown
                      trigger={ <Input
                      label="State"
                      type="text"
                      className="form-control"
                      id="inputState"
                      placeholder="Your State"
                    />
                    >
                      <NavItem value="AL">Alabama</NavItem>
                      <NavItem divider />
                      <NavItem value="AK">Alaska</NavItem>
                      <NavItem divider />
                      <NavItem value="AZ">Arizona</NavItem>
                      <NavItem divider />
                      <NavItem value="AR">Arkansas</NavItem>
                      <NavItem divider />
                      <NavItem value="CA">California</NavItem>
                      <NavItem divider />
                      <NavItem value="CO">Colorado</NavItem>
                      <NavItem divider />
                      <NavItem value="CT"> Connecticut </NavItem>
                      <NavItem divider />
                      <NavItem value="DE"> Delaware </NavItem>
                      <NavItem divider />
                      <NavItem value="DC"> District Of Columbia </NavItem>
                      <NavItem divider />
                      <NavItem value="FL"> Florida </NavItem>
                      <NavItem divider />
                      <NavItem value="GA"> Georgia </NavItem>
                      <NavItem divider />
                      <NavItem value="HI"> Hawaii </NavItem>
                      <NavItem divider />
                      <NavItem value="ID"> Idaho </NavItem>
                      <NavItem divider />
                      <NavItem value="IL"> Illinois </NavItem>
                      <NavItem divider />
                      <NavItem value="IN"> Indiana </NavItem>
                      <NavItem divider />
                      <NavItem value="IA"> Iowa</NavItem>
                      <NavItem divider />
                      <NavItem value="KS">Kansas</NavItem>
                      <NavItem divider />
                      <NavItem value="KY">Kentucky</NavItem>
                      <NavItem divider />
                      <NavItem value="LA">Louisiana</NavItem>
                      <NavItem divider />
                      <NavItem value="ME">Maine</NavItem>
                      <NavItem divider />
                      <NavItem value="MD">Maryland</NavItem>
                      <NavItem divider />
                      <NavItem value="MA">Massachusetts</NavItem>
                      <NavItem divider />
                      <NavItem value="MI">Michigan</NavItem>
                      <NavItem divider />
                      <NavItem value="MN">Minnesota</NavItem>
                      <NavItem divider />
                      <NavItem value="MS">Mississippi</NavItem>
                      <NavItem divider />
                      <NavItem value="MO">Missouri</NavItem>
                      <NavItem divider />
                      <NavItem value="MT">Montana</NavItem>
                      <NavItem divider />
                      <NavItem value="NE">Nebraska</NavItem>
                      <NavItem divider />
                      <NavItem value="NV">Nevada</NavItem>
                      <NavItem divider />
                      <NavItem value="NH">New Hampshire</NavItem>
                      <NavItem divider />
                      <NavItem value="NJ">New Jersey</NavItem>
                      <NavItem divider />
                      <NavItem value="NM">New Mexico</NavItem>
                      <NavItem divider />
                      <NavItem value="NY">New York</NavItem>
                      <NavItem divider />
                      <NavItem value="NC">North Carolina</NavItem>
                      <NavItem divider />
                      <NavItem value="ND">North Dakota</NavItem>
                      <NavItem divider />
                      <NavItem value="OH">Ohio</NavItem>
                      <NavItem divider />
                      <NavItem value="OK">Oklahoma</NavItem>
                      <NavItem divider />
                      <NavItem value="OR">Oregon</NavItem>
                      <NavItem divider />
                      <NavItem value="PA">Pennsylvania</NavItem>
                      <NavItem divider />
                      <NavItem value="RI">Rhode Island</NavItem>
                      <NavItem divider />
                      <NavItem value="SC">South Carolina</NavItem>
                      <NavItem divider />
                      <NavItem value="SD">South Dakata</NavItem>
                      <NavItem divider />
                      <NavItem value="TN">Tennessee</NavItem>
                      <NavItem divider />
                      <NavItem value="TX">Texas</NavItem>
                      <NavItem divider />
                      <NavItem value="UT">Utah</NavItem>
                      <NavItem divider />
                      <NavItem value="VT">Vermont</NavItem>
                      <NavItem divider />
                      <NavItem value="VA">Virginia</NavItem>
                      <NavItem divider />
                      <NavItem value="WA">Washington</NavItem>
                      <NavItem divider />
                      <NavItem value="WV">West Virginia</NavItem>
                      <NavItem divider />
                      <NavItem value="WI">Wisconsin</NavItem>
                      <NavItem divider />
                      <NavItem value="WY">Wyoming</NavItem>
                    </Dropdown> */}

                    <div className="form-group col-md-2">
                      <label for="inputZip">Zip</label>
                      <input
                        value={this.state.zip}
                        onChange={this.handleInputChange}
                        className="form-control"
                        name="zip"
                        placeholder="12567"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputPassword">Password</label>
                      <input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        className="form-control"
                        name="password"
                        placeholder="password"
                      />
                    </div>
                  </div>

                  <div className="">
                    <Button
                      type="submit"
                      id="add-account"
                      className="btn modal-close blue"
                      onClick={this.handleFormSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SignUpModal;
