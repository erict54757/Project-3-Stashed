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
            name="time"
            s={12} l={6}
            type="select"
            onChange={this.handleInputChange}
            className="modalDrop"
          >

            <option value="8AM">"8:00AM</option>

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
                <Icon>access_time</Icon>
              

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
