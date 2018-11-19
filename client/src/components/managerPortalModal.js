import React, { Component } from "react";
import { Row, Modal, Button, Input, Icon } from "react-materialize";
import API from "../utils/API";

class ManagerPortalModal extends Component {
  state = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    password: "barber18",
    isAdmin: false
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
    API.saveEmployee({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      email: this.state.email,
      phone: this.state.phone,
      account_key: this.state.password,
      isAdmin: this.state.isAdmin
    })
      .then(res => this.props.loadEmployees())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Modal
          s={12}
          m={3}
          header="New Employee Information"
          fixedFooter
          trigger={
            <Button className="blue">
              Add Employee
              <Icon className="blue" left>
                add
              </Icon>
            </Button>
          }
          actions={
            <div>
              <Button
                style={{ marginLeft: "5px" }}
                onClick={this.handleFormSubmit}
                className="blue"
                modal="close"
                waves="light"
              >
                Save
              </Button>
              <Button className="blue" flat modal="close" waves="light">
                Close
              </Button>
            </div>
          }
        >
          <Row>
            <Input
              s={6}
              label="First Name"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              name="firstName"
            />
            <Input
              s={6}
              label="Last Name"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              name="lastName"
            />
            <Input
              label="Address"
              s={12}
              value={this.state.street}
              onChange={this.handleInputChange}
              name="street"
            />
            <Input
              label="City"
              s={4}
              value={this.state.city}
              onChange={this.handleInputChange}
              name="city"
            />
            <Input
              label="State"
              s={4}
              value={this.state.state}
              onChange={this.handleInputChange}
              name="state"
            />
            <Input
              label="Zip Code"
              s={4}
              value={this.state.zip}
              onChange={this.handleInputChange}
              name="zip"
            />
            <Input
              type="email"
              label="Email"
              s={6}
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
            />
            <Input
              label="Phone"
              s={6}
              value={this.state.phone}
              onChange={this.handleInputChange}
              name="phone"
            />
          </Row>
        </Modal>
      </div>
    );
  }
}

export default ManagerPortalModal;
