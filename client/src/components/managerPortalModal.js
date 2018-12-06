import React, { Component } from "react";
import { Row, Modal, Button, Input, Icon } from "react-materialize";
import API from "../utils/API";

class ManagerPortalModal extends Component {
  initialState = {
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

  state = this.initialState;

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
      .then(res => this.props.loadDays())
      .then(res =>this.props.loadDayShift())
      .then(res =>this.props.loadDayShiftMonday())
      .then(res =>this.props.loadDayShiftTuesday())
      .then(res =>this.props.loadDayShiftWednesday())
      .then(res =>this.props.loadDayShiftThursday())
      .then(res =>this.props.loadDayShiftFriday())
      .then(res =>this.props.loadDayShiftSaturday())
      .then(res => this.setState(this.initialState))
      
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
            <Button className="blue" style={{ marginTop: "10px" }}>
              Add Employee
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
              <Button className="blue" modal="close" waves="light" style={{ marginLeft: "5px" }}>
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
              name="firstName"
            >
            <Icon>account_circle</Icon>
            </Input>
            <Input
              m={6}
              s={12}
              label="Last Name"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              name="lastName"
            >
            <Icon>account_circle</Icon>
            </Input>
            <Input
              label="Address"
              m={12}
              s={12}
              value={this.state.street}
              onChange={this.handleInputChange}
              name="street"
            >
            <Icon>location_on</Icon>
            </Input>

            <Input
              label="City"
              m={4}
              s={12}
              value={this.state.city}
              onChange={this.handleInputChange}
              name="city"
            >
            <Icon>business</Icon>
            </Input>

            <Input
              label="State"
              name="state"
              s={12}
              m={4}
              type="select"
              onChange={this.handleInputChange}
              className="modalDrop"
            >
              <option value="Al">Alabama</option>
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
              label="Zip Code"
              value={this.state.zip}
              onChange={this.handleInputChange}
              name="zip"
            >
            <Icon>location_on</Icon>
            </Input>
            <Input
              m={6}
              s={12}
              type="email"
              label="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
            >
            <Icon>email</Icon>
            </Input>
            <Input
              m={6}
              s={12}
              label="Phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
              name="phone"
            >
            <Icon>phone</Icon>
            </Input>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default ManagerPortalModal;
