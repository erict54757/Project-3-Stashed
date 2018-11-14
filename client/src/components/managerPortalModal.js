import React, { Component } from 'react';
import { Row, Modal, Button, Input, Icon } from "react-materialize";

class ManagerPortalModal extends Component {
    render() {
      return (
        <div>
<Modal
            header="New Employee Information"
            fixedFooter
            trigger={
              <Button className="green">
                Add Employee<Icon left>add</Icon>
              </Button>
            }
          actions={
            <div>
              <Button modal="close" waves="light">
                Save
              </Button>
              <Button flat modal="close" waves="light">
                Close
              </Button>
            </div>
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
          </div>
    );
  }
}

export default ManagerPortalModal;