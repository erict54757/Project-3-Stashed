import React, { Component } from "react";
import { Modal, Button, NavItem, Dropdown, Input, Icon, Row, } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./empApptUpdateModal.css"
import API from "../utils/API"
class EmpApptUpdateModal extends Component {

  state = {
    id: this.props.id,
    time: this.props.time,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
    telephone: this.props.telephone,
    state: this.props.state,
    city: this.props.city,
    zip: this.props.zip,
    street: this.props.street,
    date: this.props.date
  };

  handleDrop = event => {
    event.preventDefault()
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;


    // Updating the input's state
    this.setState({
      ...this.state,
      [name]: value
    });
    console.log(this.state.state)

  };
  handleInputChange = event => {
    event.preventDefault()
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;


    // Updating the input's state
    this.setState({
      ...this.state,
      [name]: value
    });
    console.log(this.state.state)

  };
  handleUpdateCustomer = event => {
    event.preventDefault();

    API.updateCustomer({
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      telephone: this.state.telephone,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip,
      street: this.state.street,
      time: this.state.time,
      date: this.state.date

    })
      .then(res => console.log("updated"))
      .catch(err => console.log(err));

  };



  render() {
    return (
      <Modal
        actions={<div><Button
          type="button"
          className="modal-close btn  blue"
        >
          Update
    </Button>
        </div>}
        id=""
        role="dialog"
        header="Update Customer Information"
        trigger={<Button className="blue"
          onClick={this.handleUpdateCustomer}
        >Update</Button>}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form id="create-form">
<Row>
                
                    <Input
                    l={6} s={12}
                      label="First Name"
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                    />
               
                 

                    <Input   s={12} l={6}
                      label="Last Name"
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder={this.props.lastName}
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                    /></Row>
               

                <Input
                  label="Current Appointment Date" s={6} className="black-text" type='date'
                  name="date"
                  placeholder={this.state.date}
                  value={this.state.date}
                  onChange={this.handleInputChange} ><Icon>date_range</Icon></Input>

                <div className="form-row">
                  <div className="form-group col-md-6">

                    <Input
                      label="Email"
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder={this.props.email}
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group col-md-6">


                    <Input
                      label="Telephone"
                      type="text"
                      className="form-control"
                      name="telephone"
                      placeholder={this.props.telephone}
                      value={this.state.telephone}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">

                  <Input
                    label="Street"
                    type="text"
                    className="form-control"
                    name="street"
                    placeholder={this.props.street}
                    value={this.state.street}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">

                    <Input
                      label="City"
                      type="text"
                      className="form-control"
                      name="city"
                      placeholder={this.props.city}
                      value={this.state.city}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group col-md-4">


                    <Dropdown
                      trigger={<Button
                        id="inputState"
                        label="State"
                        type="text"
                        className="form-control"
                        name="state"
                        placeholder={this.state.state}

                      />}
                      data-target={NavItem}
                      onClick={this.handleDrop}
                    >
                      <NavItem onClick={this.handleInputChange}
                        value={"dfajkljkfsda"}>Alabama</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="AK">Alaska</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="AZ">Arizona</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="AR">Arkansas</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="CA">California</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="CO">Colorado</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="CT"> Connecticut </NavItem>
                      <NavItem
                        divider />
                      <NavItem value="DE"> Delaware </NavItem>
                      <NavItem
                        divider />
                      <NavItem value="DC"> District Of Columbia </NavItem>
                      <NavItem
                        divider />
                      <NavItem value="FL"> Florida </NavItem>
                      <NavItem
                        divider />
                      <NavItem value="GA"> Georgia </NavItem>
                      <NavItem
                        divider />
                      <NavItem value="HI"> Hawaii </NavItem>
                      <NavItem
                        divider />
                      <NavItem value="ID"> Idaho </NavItem>
                      <NavItem
                        divider />
                      <NavItem value="IL"> Illinois </NavItem>
                      <NavItem
                        divider />
                      <NavItem value="IN"> Indiana </NavItem>
                      <NavItem
                        divider />
                      <NavItem value="IA"> Iowa</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="KS">Kansas</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="KY">Kentucky</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="LA">Louisiana</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="ME">Maine</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="MD">Maryland</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="MA">Massachusetts</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="MI">Michigan</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="MN">Minnesota</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="MS">Mississippi</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="MO">Missouri</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="MT">Montana</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="NE">Nebraska</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="NV">Nevada</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="NH">New Hampshire</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="NJ">New Jersey</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="NM">New Mexico</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="NY">New York</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="NC">North Carolina</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="ND">North Dakota</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="OH">Ohio</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="OK">Oklahoma</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="OR">Oregon</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="PA">Pennsylvania</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="RI">Rhode Island</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="SC">South Carolina</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="SD">South Dakata</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="TN">Tennessee</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="TX">Texas</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="UT">Utah</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="VT">Vermont</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="VA">Virginia</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="WA">Washington</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="WV">West Virginia</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="WI">Wisconsin</NavItem>
                      <NavItem
                        divider />
                      <NavItem value="WY">Wyoming</NavItem>
                    </Dropdown>

                    <div className="form-group col-md-2">

                      <Input
                        label="ZipCode"
                        type="text"
                        className="form-control"
                        name="zip"
                        placeholder="12567"
                        value={this.state.zip}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  {/* <div className="form-row">
                    <div className="form-group col-md-6">

                      <Input
                        label=""
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder={this.props.password}
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div> */}

                  <div className="form-row">
                    <div className="form-group col-md-6">

                    </div>
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

export default EmpApptUpdateModal;
