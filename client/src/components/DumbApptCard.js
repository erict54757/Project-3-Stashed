import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import EmpApptUpdateModal from "./empApptUpdateModal.js";
// import EmployeeSchedule from "./employeeSchedule"
import API from "../utils/API";
import "./DumbApptCard.css";

class Appointment extends Component {
  componentDidMount() {
    console.log(this.props.customers);
  }

  deleteAppointment(id) {
    API.deleteAppointment(id)
      .then(res => this.props.getAppointments())
      .catch(err => console.log(err));
  }

  render() {
    const filterCustomer = this.props.customers.filter(
      customer => customer.id === this.props.CustId
    );

    console.log(filterCustomer);

    return (
      <Card
        className="blue-grey darken-1 cardBody z-depth-5"
        textClassName="white-text"
      >
        {filterCustomer.map(customer => (
          <h4>
            {customer.first_name} {customer.last_name}
          </h4>
        ))}

        <h5>At {this.props.time}</h5>
        <Row>
          <Col s={2} />
          <Col s={3}>
            <Button
              className="red"
              value={this.props.id}
              onClick={() => this.deleteAppointment(this.props.id)}
            >
              X
            </Button>
          </Col>
          <Col s={5}>
            {filterCustomer.map(customer => (
              <EmpApptUpdateModal
                key={customer.id}
                firstName={customer.first_name}
                lastName={customer.last_name}
                id={customer.id}
                time={this.props.time}
                date={this.props.date}
                email={customer.email}
                street={customer.street}
                city={customer.city}
                state={customer.state}
                zip={customer.zip}
                phone={customer.phone}
              />
            ))}
          </Col>
          <Col s={2} />
        </Row>
      </Card>
    );
  }
}
export default Appointment;
