import React from "react";
import { Row, Carousel, Modal, Button, Input, Icon } from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class EmployeeSchedule extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Modal
            header="New Employee Information"
            trigger={
              <Button className="green">
                Add Appointment<Icon left>add</Icon>
              </Button>
            }
          >
            <Row>
              <Input s={6}
                className="black-text"
                label="First Name"><Icon>account_circle</Icon>
                </Input>

              <Input className="black-text" s={6} placeholder="Last Name">
                <Icon>account_circle</Icon>
              </Input>

              <Input s={6}
                className="black-text"
                label="Telephone"
                validate
                type="tel"><Icon>phone</Icon>
              </Input>
              
              <Input s={6}
                className="black-text"
                type="date"
                label="Select Date"
                defaultValue="2"
                onChange={function(e, value) {}}><Icon>date_range</Icon>
              </Input>

              <Input s={6}
                className="black-text"
                name="on"
                type="time"
                placeholder="Time"
                onChange={function(e, value) {}}><Icon>access_time</Icon>
              </Input>

              <Button
                type="submit"
                className="btn btn-primary blue lighten-1 "
                style={{ marginLeft: "25%", marginRight: "25%" }}
                onClick={function(e, value) {}}>Submit</Button>
            </Row>
          </Modal>
        </Row>

        <Row>
          <Carousel options={{ fullWidth: false }}>
            <div className="red">
              <h2>First Panel</h2>
              <p className="white-text">This is your first panel</p>
            </div>
            <div className="amber">
              <h2>Second Panel</h2>
              <p className="white-text">This is your second panel</p>
            </div>
            <div className="green">
              <h2>Third Panel</h2>
              <p className="white-text">This is your third panel</p>
            </div>
            <div className="blue">
              <h2>Fourth Panel</h2>
              <p className="white-text">This is your fourth panel</p>
            </div>
          </Carousel>
        </Row>
      </div>
    );
  }
}

export default EmployeeSchedule;
