import React, { Component } from "react";
import { Row, Input, Button, Icon, Modal } from "react-materialize";
import API from "../utils/API";
import "jquery";
import moment from "moment";
import "materialize-css/dist/js/materialize.js";
import "./NewAppointment.css";

class NewAppointment extends Component {
  initilstate = {
    date: moment().format("DD MMMM, YYYY"),
    time: "",
    employeeId: "",
    employees: []
  };

  state = this.initilstate;

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .then(res => console.log(this.state.employees))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
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
      .then(res => this.setState(this.initialstate))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Modal
        actions={
          <div>
            <Button
              className="btn blue lighten-1 "
              modal="close"
              onClick={this.handleSubmit}
            >
              Save Appointment
            </Button>
            <Button
              style={{ marginLeft: "5px" }}
              className="blue"
              modal="close"
              waves="light"
            >
              Close
            </Button>
          </div>
        }
        id=""
        role="dialog"
        header="Make A New Appointment"
        trigger={
          <Button className="blue waves-effect waves-light makeAppointment z-depth-5">
            <h5>Make An Appointment</h5>
          </Button>
        }
      >
        <div className="container">
          <div className="row">
            <form>
              <Row>
                <Input
                  s={12}
                  className="black-text"
                  type="date"
                  name="date"
                  placeholder={this.state.date}
                  value={this.state.date}
                  onChange={this.handleInputChange}
                >
                  <Icon>date_range</Icon>
                </Input>
                {/* <Icon>account_circle</Icon> */}
              </Row>
              <Row>
                <Input
                  name="employeeId"
                  l={6}
                  s={12}
                  label="Choose an Employee"
                  type="select"
                  onChange={this.handleInputChange}
                  className="modalDrop"
                >
                  {this.state.employees.map(employee => (
                    <option id="name" key={employee.id} value={employee.id}>
                      {employee.first_name} {employee.last_name}
                    </option>
                  ))}
                </Input>

                <Input
                  name="time"
                  label="Choose a Time"
                  s={12}
                  l={6}
                  type="select"
                  onChange={this.handleInputChange}
                  className="modalDrop "
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
              </Row>
            </form>
          </div>
        </div>
      </Modal>
    );
  }
}
export default NewAppointment;
