import React, { Component } from "react";
import { Row, Input, Button, Icon, Modal } from "react-materialize";
import API from "../utils/API";
import "jquery";
import moment from "moment";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./NewAppointment.css";
// import { deflateRaw } from "zlib";

class NewAppointment extends Component {
  state = {
    date: moment().format("DD MMMM, YYYY"),
    time: "",
    employeeId: "",
    employees: [
      { id: 1, firstName: "Eric", lastname: "Taft" },
      { id: 2, firstName: "Nicole", lastname: "Barry" },
      { id: 3, firstName: "Drew", lastname: "Gallowitch" }
    ]
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
      <Modal
        actions={
          <Button className="btn blue lighten-1 " onClick={this.handleSubmit}>
            Save Appointment
          </Button>
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
                  label="Choose An Employee"
                  type="select"
                  onChange={this.handleInputChange}
                  className="modalDrop "
                >
                  {this.state.employees.map(employee => (
                    <option key={employee.id} value={employee.id}>
                      {employee.firstName} {employee.lastname}
                    </option>
                  ))}
                </Input>

                {/* <span><Icon>access_time</Icon></span> */}
                <Input
                  name="time"
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
