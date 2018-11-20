import React, { Component } from 'react';
import { Row, Modal, Button, Input, Icon,} from "react-materialize";
import "./employeeScheduleModal.css"
class EmployeeScheduleModal extends Component {
  render() {
    return (
      <div>
        <Modal
          header="New Appointment Information"

          actions={
           <div>
              <Button
                waves="light"
                type="button"
                id="employeeSave"
                className="modal-close btn  blue"
              >Create</Button>
              <Button  className="blue " modal="close" waves="light">
                Close
              </Button>
         </div>
          }
          
          trigger={
            <Button className="blue addAppointment">
              Add Appointment
            </Button>
          }
        >
          <Row>
            <Input s={6} className="black-text" label="First Name">
              <Icon>date_range</Icon>
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
          </Row>
        </Modal>
      </div>
    );
  }
}

export default EmployeeScheduleModal;