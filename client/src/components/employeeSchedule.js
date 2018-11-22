import React from "react";
import { Row, Col, Icon, Input } from "react-materialize";
import moment from "moment";
import EmployeeScheduleModal from "./employeeScheduleModal";
// import { Link, Route } from "react-router-dom";
import "jquery";
import Appointment from "./DumbApptCard";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./employeeScheduleModal.css";
import "./employeeSchedule.css";
import API from "../utils/API";

class EmployeeSchedule extends React.Component {
  state = {
    date: moment().format("DD MMMM, YYYY"),
    Appointments: [
      {
        id: 1,
        time: "8:30",
        firstName: "eric",
        lastName: "taft",
        email: "erict54757@gmail.com",
        telephone: "7153799917",
        date: "20 November, 2018"
      },
      {
        id: 2,
        time: "9:30",
        firstName: "Lisa",
        lastName: "something",
        telephone: "7154449917",
        date: "19 November, 2018"
      },
      {
        id: 3,
        time: "10:30",
        firstName: "Gerry",
        lastName: "harding",
        telephone: "7153799934",
        date: "19 November, 2018"
      },
      {
        id: 4,
        time: "11:30",
        firstName: "Harry",
        lastName: "french",
        telephone: "5555559917",
        date: "19 November, 2018"
      }
    ],
    Customers: [
      {
        id: 1,
        time: "8:30",
        firstName: "eric",
        lastName: "taft",
        email: "erict54757@gmail.com",
        telephone: "7153799917",
        street: "9518 grove hill dr",
        city: "charlotte",
        state: "nc",
        zip: 28262,
        password: "password",
        date: "01/01/2019"
      },
      {
        id: 3,
        time: "10:30",
        firstName: "Gerry",
        lastName: "something else",
        email: "Gerry@gmail.com",
        telephone: "7153799934",
        street: "9544 grove hill dr",
        city: "charlottesville",
        state: "va",
        zip: 28262,
        password: "password",
        date: "01/03/2019"
      },
      {
        id: 2,
        time: "9:30",
        firstName: "Lisa",
        lastName: "something",
        email: "lisa@gmail.com",
        telephone: "7154449917",
        street: "9500 grove hill dr",
        city: "chetek",
        state: "wi",
        zip: 54757,
        password: "password",
        date: "01/02/2019"
      },
      {
        id: 4,
        time: "11:30",
        firstName: "Harry",
        lastName: "something more",
        email: "harry54757@gmail.com",
        telephone: "5555559917",
        street: "9533 grove hill dr",
        city: "Eau claire",
        state: "wi",
        zip: 54705,
        password: "password",
        date: "01/04/2019"
      }
    ],
    filtered: []
  };
  handleInputChange = event => {
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    console.log(this.state.filtered);
    // Updating the input's state
    this.setState({
      ...this.state,
      [name]: value
    });
  };
  deleteAppointment = id => {
    API.deleteEmployee(id)
      .then(res => this.loadAppointments())
      .catch(err => console.log(err));
  };

  getAppointments = () => {
    API.getAppointments().then(res =>
      this.setState({
        Appointments: res.data
      })
    );
  };

  componentDidMount() {
    API.getCustomers().then(res => this.setState({ Customers: res.data }));

    API.getAppointments()
      .then(res => this.setState({ Appointments: res.data }))

      .catch(err => console.log(err));
  }

  // componentDidMount(){
  //   console.log(this.state.Appointments)
  // }

  render() {
    console.log(this.state.Appointments);
    const filteredAppointments = this.state.Appointments.filter(appointment => {
      return appointment.date === this.state.date;
    });

    return (
      <div>
        <Row>
          <Row>
            <Col>
              <EmployeeScheduleModal />
            </Col>
          </Row>
          <Col className="inputDate ">
            {" "}
            <Input
              className="center "
              name="date"
              type="date"
              placeholder={this.state.date}
              value={this.state.date}
              onChange={this.handleInputChange}
            >
              <Icon>date_range</Icon>
            </Input>
          </Col>
        </Row>

        <Row
          className="center"
          style={{ paddingLeft: "3%", paddingRight: "3%" }}
        >
          {filteredAppointments.length ? (
            filteredAppointments.map(appointment => (
              <div className="col s12 m6 l4" key={appointment.id}>
                <Appointment
                  customer={this.state.Customers.find(
                    Customer => Customer.id === appointment.id
                  )}
                  key={appointment.id}
                  all={appointment}
                  id={appointment.id}
                  time={appointment.time}
                  firstName={appointment.firstName}
                  lastName={appointment.lastName}
                />
              </div>
            ))
          ) : (
            <h3>No Scheduled Appointments For This Day</h3>
          )}
        </Row>
      </div>
    );
  }
}

export default EmployeeSchedule;