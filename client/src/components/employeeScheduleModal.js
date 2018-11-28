import React, { Component } from "react";
import { Row, Modal, Button, Input, Icon } from "react-materialize";
import "./employeeScheduleModal.css";
import API from "../utils/API";

class EmployeeScheduleModal extends Component {
  state = {
    CustomerId: "",
    EmployeeId: this.props.id,
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    password: "customer18",
    time: "",
    date: ""
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
      email: this.state.email,
      phone: this.state.phone,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip,
      street: this.state.street,
      time: this.state.time,
      date: this.state.date,
      account_key: this.state.password
    })
      .then(res => this.setState({ CustomerId: res.data.id }))
      .then(() => this.saveAppointment())
      .then(() => this.props.getAppointments())
      .then(() => this.props.getCustomers())
      .catch(err => console.log(err));
  };

  saveAppointment = () => {
    API.saveAppointment({
      EmployeeId: this.state.EmployeeId,
      CustomerId: this.state.CustomerId,
      date: this.state.date,
      time: this.state.time
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Modal
        header="New Appointment Information"
        actions={
          <div>
            <Button
              waves="light"
              type="button"
              id="employeeSave"
              className="modal-close btn  blue"
              onClick={this.handleFormSubmit}
            >
              Create
            </Button>
            <Button
              style={{ marginLeft: "5px" }}
              className="blue "
              modal="close"
              waves="light"
            >
              Close
            </Button>
          </div>
        }
        trigger={
          <Button className="blue addAppointment">Add Appointment</Button>
        }
      >
        <Row>
          <Input
            m={6}
            s={12}
            className="black-text"
            label="First Name"
            name="firstName"
            defaultValue={this.state.firstName}
            onChange={this.handleInputChange}
          >
            <Icon>account_circle</Icon>
          </Input>

          <Input
            m={6}
            s={12}
            label="Last Name"
            type="text"
            className="form-control"
            name="lastName"
            defaultValue={this.state.lastName}
            onChange={this.handleInputChange}
          >
            <Icon>account_circle</Icon>
          </Input>

          <Input
            m={6}
            s={12}
            label="Appointment Date"
            className="black-text"
            type="date"
            name="date"
            defaultValue={this.state.date}
            onChange={this.handleInputChange}
          >
            <Icon>date_range</Icon>
          </Input>

          <Input
            m={12}
            l={6}
            name="time"
            type="select"
            onChange={this.handleInputChange}
            className="modalDrop"
          >
            <option value="8:00AM">8:00AM</option>

            <option value="9:00AM">9:00AM</option>

            <option value="10:00AM">10:00AM</option>

            <option value="11:00AM">11:00AM</option>

            <option value="12:00PM">12:00PM</option>

            <option value="1:00PM">1:00PM</option>

            <option value="2:00PM">2:00PM</option>

            <option value="3:00PM">3:00PM</option>

            <option value="4:00PM">4:00PM</option>

            <option value="5:00PM">5:00PM</option>

            <option value="6:00PM">6:00PM</option>
          </Input>
          <Input
            m={12}
            s={12}
            label="Street"
            type="text"
            className="form-control"
            name="street"
            defaultValue={this.state.street}
            onChange={this.handleInputChange}
          >
            <Icon>location_on</Icon>
          </Input>
          <Input
            m={4}
            s={12}
            label="City"
            type="text"
            className="form-control"
            name="city"
            defaultValue={this.state.city}
            onChange={this.handleInputChange}
          >
            <Icon>business</Icon>
          </Input>
          <Input
            m={4}
            s={12}
            name="state"
            label="State"
            type="select"
            onChange={this.handleInputChange}
            defaultValue={this.state.state}
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
            label="ZipCode"
            type="text"
            className="form-control"
            name="zip"
            defaultValue={this.state.zip}
            onChange={this.handleInputChange}
          >
            <Icon>location_on</Icon>
          </Input>

          <Input
            m={6}
            s={12}
            label="Email"
            type="email"
            className="form-control"
            name="email"
            defaultValue={this.state.email}
            onChange={this.handleInputChange}
          >
            <Icon>email</Icon>
          </Input>

          <Input
            m={6}
            s={12}
            label="Phone"
            name="phone"
            defaultValue={this.state.phone}
            onChange={this.handleInputChange}
          >
            <Icon>phone</Icon>
          </Input>
        </Row>
      </Modal>
    );
  }
}

export default EmployeeScheduleModal;
