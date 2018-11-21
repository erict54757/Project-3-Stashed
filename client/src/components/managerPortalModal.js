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
              name="firstName"
            />
            <Input
            m={6}
              s={12}
              label="Last Name"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              name="lastName"
            />
            <Input
              label="Address"
              m={12}
              s={12}
              value={this.state.street}
              onChange={this.handleInputChange}
              name="street"
            />
            <Input
              label="City"
              m={4}
              s={12}
              value={this.state.city}
              onChange={this.handleInputChange}
              name="city"
            />

            <Input
              name="state"
              s={12} m={4}
              type="select"
              onChange={this.handleInputChange}
              className="modalDrop"
            >

              <option
                value="Al">Alabama</option>
              <option
                divider />
              <option value="AK">Alaska</option>
              <option
                divider />
              <option value="AZ">Arizona</option>
              <option
                divider />
              <option value="AR">Arkansas</option>
              <option
                divider />
              <option value="CA">California</option>
              <option
                divider />
              <option value="CO">Colorado</option>
              <option
                divider />
              <option value="CT"> Connecticut </option>
              <option
                divider />
              <option value="DE"> Delaware </option>
              <option
                divider />
              <option value="DC"> District Of Columbia </option>
              <option
                divider />
              <option value="FL"> Florida </option>
              <option
                divider />
              <option value="GA"> Georgia </option>
              <option
                divider />
              <option value="HI"> Hawaii </option>
              <option
                divider />
              <option value="ID"> Idaho </option>
              <option
                divider />
              <option value="IL"> Illinois </option>
              <option
                divider />
              <option value="IN"> Indiana </option>
              <option
                divider />
              <option value="IA"> Iowa</option>
              <option
                divider />
              <option value="KS">Kansas</option>
              <option
                divider />
              <option value="KY">Kentucky</option>
              <option
                divider />
              <option value="LA">Louisiana</option>
              <option
                divider />
              <option value="ME">Maine</option>
              <option
                divider />
              <option value="MD">Maryland</option>
              <option
                divider />
              <option value="MA">Massachusetts</option>
              <option
                divider />
              <option value="MI">Michigan</option>
              <option
                divider />
              <option value="MN">Minnesota</option>
              <option
                divider />
              <option value="MS">Mississippi</option>
              <option
                divider />
              <option value="MO">Missouri</option>
              <option
                divider />
              <option value="MT">Montana</option>
              <option
                divider />
              <option value="NE">Nebraska</option>
              <option
                divider />
              <option value="NV">Nevada</option>
              <option
                divider />
              <option value="NH">New Hampshire</option>
              <option
                divider />
              <option value="NJ">New Jersey</option>
              <option
                divider />
              <option value="NM">New Mexico</option>
              <option
                divider />
              <option value="NY">New York</option>
              <option
                divider />
              <option value="NC">North Carolina</option>
              <option
                divider />
              <option value="ND">North Dakota</option>
              <option
                divider />
              <option value="OH">Ohio</option>
              <option
                divider />
              <option value="OK">Oklahoma</option>
              <option
                divider />
              <option value="OR">Oregon</option>
              <option
                divider />
              <option value="PA">Pennsylvania</option>
              <option
                divider />
              <option value="RI">Rhode Island</option>
              <option
                divider />
              <option value="SC">South Carolina</option>
              <option
                divider />
              <option value="SD">South Dakata</option>
              <option
                divider />
              <option value="TN">Tennessee</option>
              <option
                divider />
              <option value="TX">Texas</option>
              <option
                divider />
              <option value="UT">Utah</option>
              <option
                divider />
              <option value="VT">Vermont</option>
              <option
                divider />
              <option value="VA">Virginia</option>
              <option
                divider />
              <option value="WA">Washington</option>
              <option
                divider />
              <option value="WV">West Virginia</option>
              <option
                divider />
              <option value="WI">Wisconsin</option>
              <option
                divider />
              <option value="WY">Wyoming</option>

            </Input>

            <Input
            m={4}
            s={12}
              label="Zip Code"
              value={this.state.zip}
              onChange={this.handleInputChange}
              name="zip"
            />
            <Input
            m={6}
            s={12}
              type="email"
              label="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
            />
            <Input
            m={6}
            s={12}
              label="Phone"
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
