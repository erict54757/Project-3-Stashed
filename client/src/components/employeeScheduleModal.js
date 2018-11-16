import React, { Component } from 'react';
import { Row, Modal, Button, Input, Icon } from "react-materialize";
import "./employeeScheduleModal.css"
class EmployeeScheduleModal extends Component {
  render() {
    return (
      <div>
        <Modal
          header="New Employee Information"

          actions={
            <div>
              <Button
                waves="light"
                type="button"
                id="employeeSave"
                className="modal-close btn  blue"
              >
                Save
              </Button>
              <Button className="blue " modal="close" waves="light">
                Close
              </Button>
            </div>
          }
          
          trigger={
            <Button className="blue addAppointment">
              Add Appointment<Icon left>add</Icon>
            </Button>
          }
        >
          <Row>
            <Input s={6} className="black-text" label="First Name">
              <Icon>account_circle</Icon>
            </Input>

            <Input className="black-text" s={6} placeholder="Last Name">
              <Icon>account_circle</Icon>
            </Input>

            <Input
              s={6}
              className="black-text"
              label="Telephone"
              validate
              type="tel"
            >
              <Icon>phone</Icon>
            </Input>

            <Input
              s={6}
              className="black-text"
              type="date"
              label="Select Date"
              defaultValue="2"
              onChange={function (e, value) { }}
            >
              <Icon>date_range</Icon>
            </Input>

            <Input
              s={6}
              className="black-text"
              name="on"
              type="time"
              placeholder="Time"
              onChange={function (e, value) { }}
            >
              <Icon>access_time</Icon>
            </Input>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default EmployeeScheduleModal;