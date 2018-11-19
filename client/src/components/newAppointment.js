import React, { Component } from "react";
import { Row, Input, Button, Icon } from "react-materialize";
import API from "../utils/API";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./NewAppointment.css";

class NewAppointment extends Component {
  state = {
    date: "",
    time: "",
    employeeId: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    API.saveAppointment({
      date: this.state.date,
      time: this.state.time,
      CustomerId: this.props.customerId,
      EmployeeId: this.state.employeeId
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <Row>
              <Input
                s={12}
                className="black-text"
                type="text"
                name="employeeId"
                placeholder="Pick a Barber"
                value={this.state.employeeId}
                onChange={this.handleInputChange}
              >
                <Icon>account_circle</Icon>
              </Input>

              <Input
                s={6}
                className="black-text"
                type="date"
                name="date"
                placeholder="Date"
                value={this.state.date}
                onChange={this.handleInputChange}
              >
                <Icon>date_range</Icon>
              </Input>

              <Input
                s={6}
                className="black-text"
                name="on"
                type="time"
                placeholder="Time"
                name="time"
                value={this.state.time}
                onChange={this.handleInputChange}
              >
                <Icon>access_time</Icon>
              </Input>

              <Button
                className="btn blue lighten-1 "
                style={{ marginLeft: "45%", marginRight: "45%" }}
                onClick={this.handleSubmit}
              >
                Save Appointment
              </Button>
            </Row>
          </form>
        </div>
      </div>
    );
  }
}
export default NewAppointment;
