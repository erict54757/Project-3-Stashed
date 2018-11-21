import React, { Component } from 'react';
import { Row, Modal, Button, Input, Icon, } from "react-materialize";
import "./employeeScheduleModal.css"
import API from "../utils/API"
class EmployeeScheduleModal extends Component {
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
    API.saveAppointment({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      telephone: this.state.telephone,
      date: this.state.date,
      time: this.state.time,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      email: this.state.email,
      phone: this.state.phone,
      account_key: this.state.password,
      isAdmin: this.state.isAdmin
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  onKeyUp = (target, e) => {
    if (e.keyCode === 13) {
      switch (target) {
        case "firstName":
          this.lastName.focus();
          break
        case "lastName":
          this.firstName.focus();
          break
        default:
          this.firstName.focus();

      }
    }
  }

  render() {
    return (
      <div>
        <Modal
          header="New Appointment Information"

          actions={
            <div>
              <Button
                waves="light"
                type="button"
                id="employeeSave"
                className="modal-close btn  blue"
              >Create</Button>
              <Button className="blue " modal="close" waves="light">
                Close
              </Button>
            </div>
          }

          trigger={
            <Button className="blue addAppointment">
              Add Appointment
            </Button>
          }
        >
          <Row>
            <Input s={6} className="black-text" label="First Name"
              name="firstName" 
              type="text"
              onChange={this.handleInputChange}
              ref={input => {this.firstName = input}}
              onKeyUp={this.onKeyUp.bind(this, "firstName")}
             
            >
              <Icon>date_range</Icon>
            </Input>

            <Input className="black-text" s={6} placeholder="Last Name"
              name="lastName"
              type="text"
              onChange={this.handleInputChange}
              ref={input => {this.lastName = input}}
              onKeyUp={this.onKeyUp.bind(this,"lastName")}>
              <Icon>account_circle</Icon>
            </Input>

            <Input
              s={6}
              className="black-text"
              name="telephone"
              label="Telephone"
              validate
              type="tel"
              onChange={this.handleInputChange}
            >
              <Icon>phone</Icon>
            </Input>

            <Input
              s={6}
              name="date"
              className="black-text"
              type="date"
              label="Select Date"
              defaultValue="2"
              onChange={this.handleInputChange}
            >
              <Icon>date_range</Icon>
            </Input>

            <Input
              name="time"
              s={12} l={6}
              type="select"
              onChange={this.handleInputChange}
              className="modalDrop"
            >

              <option value="8AM">8:00AM</option>

              <option value="9AM">9:00AM</option>

              <option value="10AM">10:00AM</option>

              <option value="11AM">11:00AM</option>

              <option value="12PM">12:00PM</option>

              <option value="1PM">1:00PM</option>

              <option value="2PM">2:00PM</option>

              <option value="3PM">3:00PM</option>

              <option value="4PM">4:00PM</option>

              <option value="5PM">5:00PM</option>

              <option value="6PM">6:00PM</option>



            </Input>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default EmployeeScheduleModal;