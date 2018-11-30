import React, { Component } from "react";
import { Row, Modal, Button, Input, Icon } from "react-materialize";
import "./employeeScheduleModal.css";
import API from "../utils/API";


function validate(firstName, lastName, street, city, state, zip, email, phone, date, time) {
  // true means invalid, so our conditions got reversed
  return {  
    firstName: firstName.length===0,
     lastName:lastName.length===0,
      street: street.length===0,
       city: city.length===0,
        state: state.length===0,
         zip: zip.length<5,
    email: email.length <7,
    phone: phone.length<9,
    date: date.length===0,
    time: time.length===0
    
   
  };
}

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
    date: "",
    time: "",
    
    touched: { 
      firstName: false,
      lastName: false,
      street: false,
      city: false,
      state: false,
      zip: false,
      email: false,
      phone: false,
      date: false,
      time: false
     
     
    }, 
  };
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }
  canBeSubmitted() {
    const errors = validate(this.state.firstName,this.state.lastName, this.state.street, this.state.city, this.state.state, this.state.zip, this.state.email, this.state.phone, this.state.date, this.state.time,);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }


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
    const errors = validate(this.state.firstName,this.state.lastName, this.state.street, this.state.city, this.state.state, this.state.zip, this.state.email, this.state.phone,  this.state.date, this.state.time);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = (field) => {
    const hasError = errors[field];
    const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };
    return (
      <Modal
        header="New Appointment Information"
        actions={
          <div>
            <Button
              waves="light"
              type="button"
              disabled={isDisabled}
              className="modal-close btn  blue waves-effect waves-light"
              onClick={this.handleFormSubmit}
            >
              Create
            </Button>
            <Button
              style={{ marginLeft: "5px" }}
              className="blue waves-effect waves-light "
              modal="close"
              waves="light"
            >
              Close
            </Button>
          </div>
        }
        trigger={
          <Button className="blue addAppointment waves-effect waves-light">Add Appointment</Button>
        }
      >
        <Row>
          <Input
            m={6}
            s={12}
            className={shouldMarkError('firstName') ? "error invalid" : ""}
            label="First Name"
            name="firstName"
            onBlur={this.handleBlur('firstName')}
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
            className={shouldMarkError('lastName') ? "error invalid" : ""}
            name="lastName"
            onBlur={this.handleBlur('lastName')}
            defaultValue={this.state.lastName}
            onChange={this.handleInputChange}
          >
            <Icon>account_circle</Icon>
          </Input>

          <Input
            m={6}
            s={12}
            label="Appointment Date"
            className={shouldMarkError('date') ? "error invalid" : "black-text"}
            type="date"
            name="date"
            onBlur={this.handleBlur('date')}
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
            onBlur={this.handleBlur('time')}
            onChange={this.handleInputChange}
            className={shouldMarkError('time') ? "error invalid" : "modalDrop"}
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
            className={shouldMarkError('street') ? "error invalid" : ""}
            name="street"
            onBlur={this.handleBlur('street')}
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
            className={shouldMarkError('city') ? "error invalid" : ""}
            name="city"
            onBlur={this.handleBlur('city')}
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
            onBlur={this.handleBlur('state')}
            onChange={this.handleInputChange}
            defaultValue={this.state.state}
            className={shouldMarkError('state') ? "error invalid" : "modalDrop"}
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
            className={shouldMarkError('zip') ? "error invalid" : ""}
            name="zip"
            onBlur={this.handleBlur("zip")}
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
            className={shouldMarkError('email') ? "error invalid" : ""}
            name="email"
            onBlur={this.handleBlur('email')}
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
            className={shouldMarkError('phone') ? "error invalid" : ""}
            onBlur={this.handleBlur('phone')}
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
