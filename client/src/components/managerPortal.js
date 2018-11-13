import React from "react";
import {
  Row,
  Button,
  Col,
  CardPanel,
  Modal,
  Icon,
  Input
} from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class ManagerPortal extends React.Component {
  render() {
    return (
      <div className="row">
        <Row>
          <Modal
            header="New Employee Information"
            fixedFooter
            trigger={
              <Button className="green">
                Add Employee<Icon left>add</Icon>
              </Button>
            }
          >
            <Row>
              <Input s={6} label="First Name" />
              <Input s={6} label="Last Name" />
              <Input label="Address" s={12} />
              <Input label="City" s={6} />
              <Input label="State" s={6} />
              <Input type="email" label="Email" s={12} />
            </Row>
          </Modal>
        </Row>

        <Row>
          <Col s={12} m={4} className="lighten-4 black-text">
          <CardPanel id="employee">
            <h5>
              Andrew Gallowitch
              <Button
                style={{ marginLeft: "90%", marginBottom: "5%" }}
                floating
                waves="light"
                icon="clear"
                className="red"
              />
            </h5>
            </CardPanel>



          </Col>

          <Col s={12} m={1} />
          <Col s={12} m={6} className="lighten-4 black-text">
            <CardPanel>
              <p>Name:</p>
              <p>Phone:</p>
              <p>E-Mail:</p>
              <p>Address:</p>
            </CardPanel>
          </Col>
          <Col s={12} m={1} />
        </Row>
        <Row>
          <Col s={12} m={4} />
          <Col s={12} m={1} />
          <Col s={12} m={6} className="black-text">
          
            <CardPanel />
          </Col>
          <Col s={12} m={1} />
        </Row>
      </div>
    );
  }
}
export default ManagerPortal;
