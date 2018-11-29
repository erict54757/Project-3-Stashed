import React, { Component } from "react";
import { Modal, Button, Input, Icon, Row } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "./empApptUpdateModal.css";
import "materialize-css/dist/js/materialize.js";
import API from "../utils/API";

class EmpApptUpdateModal extends Component {
  state = {
    id: this.props.custId,
    time: this.props.time,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
    phone: this.props.phone,
    state: this.props.state,
    city: this.props.city,
    zip: this.props.zip,
    street: this.props.street,
    date: this.props.date
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
    console.log(this.state.state);
  };

  handleUpdateCustomer = event => {
    event.preventDefault();
    this.updateCustomer(this.state.id);
  };

  updateCustomer = id => {
    API.updateCustomer(id, {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip,
      street: this.state.street
    })
      .then(res => this.props.getAppointments())
      .catch(err => console.log(err));

    API.updateAppointment(this.props.apptId, {
      date: this.state.date,
      time: this.state.time,
      CustomerId: this.state.id,
      EmployeeId: this.props.empId
    })
      .then(res => this.props.getCustomers())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Modal
        actions={
          <div>
            <Button
              style={{ marginLeft: "5px" }}
              type="button"
              className="modal-close btn  blue waves-effect waves-blue"
              onClick={this.handleUpdateCustomer}
            >
              Update
            </Button>
            <Button className="blue" modal="close" waves="light">
              Close
            </Button>
          </div>
        }
        id=""
        role="dialog"
        header="Update Customer Information"
        trigger={<Button className="blue waves-effect waves-blue">Update</Button>}
      >
        <Row>
          <Input
            l={6}
            s={12}
            className="black-text"
            label="First Name"
            name="firstName"
            placeholder={this.props.firstName}
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
            label="New Appointment Date"
            className="black-text"
            type="date"
            name="date"
            placeholder={this.state.date}
            defaultValue={this.state.date}
            onChange={this.handleInputChange}
          >
            <Icon>date_range</Icon>
          </Input>

          <Input
            name="time"
            m={6}
            s={12}
            label="New Appointment Time"
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
            l={12}
            s={12}
            label="Street"
            type="text"
            className="form-control"
            name="street"
            placeholder={this.props.street}
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
            placeholder={this.props.city}
            defaultValue={this.state.city}
            onChange={this.handleInputChange}
          >
            <Icon>business</Icon>
          </Input>
          <Input
            name="state"
            label="State"
            s={12}
            l={4}
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
            l={4}
            s={12}
            label="ZipCode"
            type="text"
            className="form-control"
            name="zip"
            placeholder="12567"
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
            placeholder={this.props.email}
            defaultValue={this.state.email}
            onChange={this.handleInputChange}
          >
            <Icon>email</Icon>
          </Input>

          <Input
            l={6}
            s={12}
            label="Telephone"
            name="telephone"
            placeholder={this.props.phone}
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

export default EmpApptUpdateModal;
