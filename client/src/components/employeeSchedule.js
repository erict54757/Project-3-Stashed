import React from "react";
import { Row, Input, Button} from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class EmployeeSchedule extends React.Component {
  render() {
    return (
        <div className="row">
          <Row>
          <Button s={2} floating medium className='green' waves='dark' icon='add' left/>
          <Input s={4} label="Name" validate defaultValue='' />

          <Button s={2} floating left medium className='red' waves='dark' icon='clear' />
        
          </Row>
        </div>
    );
  }
}
export default EmployeeSchedule;