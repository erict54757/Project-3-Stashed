import React, { Component } from 'react';
import { Row, Modal, Button, Input, Icon } from "react-materialize";

class EmployeeScheduleModal extends Component {
  render() {
    return (
      <div>
        <Modal
          header="New Employee Information"
          trigger={
            <Button className="blue">
              Add Appointment<Icon left>add</Icon>
            </Button>
          }
          actions={
            <div>
              <Button style={{marginLeft: "5px"}}  className="blue" modal="close" waves="light">
                Save
              </Button>
              <Button style={{marginLeft: "5px"}} className="blue"  modal="close" waves="light">
                Close
              </Button>
            </div>
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
              onChange={function(e, value) {}}
            >
              <Icon>date_range</Icon>
            </Input>

            <Input
              s={6}
              className="black-text"
              name="on"
              type="time"
              placeholder="Time"
              onChange={function(e, value) {}}
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