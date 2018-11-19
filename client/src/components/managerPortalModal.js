import React, { Component } from 'react';
import { Row, Modal, Button, Input, Icon } from "react-materialize";

class ManagerPortalModal extends Component {
    render() {
      return (
        <div >
<Modal 
            header="New Employee Information"
            fixedFooter
            trigger={
              <Button className="blue">
                Add Employee<Icon className="blue" left>add</Icon>
              </Button>
            }
          actions={
            <div>
              <Button style={{marginLeft: "5px"}}className="blue" modal="close" waves="light">
                Save
              </Button>
              <Button className="blue" flat modal="close" waves="light">
                Close
              </Button>
            </div>
          }
          >
            <Row>
              <Input s={6} label="First Name" />
              <Input s={6} label="Last Name" />
              <Input label="Address" s={12} />
              <Input label="City" s={4} />
              <Input label="State" s={4} />
              <Input label="Zip Code" s={4} />
              <Input type="email" label="Email" s={6} />
              <Input label="Phone" s={6} />
            </Row>
          </Modal>
          </div>
    );
  }
}

export default ManagerPortalModal;