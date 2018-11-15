import React, { Component } from 'react';
import {
  Row,
  Button,
  Col,
  CardPanel,
} from "react-materialize";
import ManagerPortalModal from "./managerPortalModal";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class ManagerPortal extends Component {
  render() {
    return (
      
      <div >
        <Row >
          <Col style={{marginLeft:"5px"}} >
          <ManagerPortalModal/>
          </Col>
        </Row>

        <Row>
          <Col s={12}  m={6} className="lighten-4 black-text">
          <CardPanel id="employee">
            <h5>
              Andrew Gallowitch
              <Button
                style={{ marginLeft: "90%", marginBottom: "5%" }}
                floating
                waves="light"
                icon="clear"
                className="blue"
              />
            </h5>
            </CardPanel>



          </Col>

       
          <Col s={12} m={6} className="lighten-4 black-text">
            <CardPanel>
              <p>Name:</p>
              <p>Phone:</p>
              <p>E-Mail:</p>
              <p>Address:</p>
            </CardPanel>
          </Col>
        
        </Row>
       </div>
     
    );
  }
}
export default ManagerPortal;
