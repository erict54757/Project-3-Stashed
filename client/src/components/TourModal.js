import React, { Component } from "react";
import { Modal, Button, Row, Col, Collection, CollectionItem } from "react-materialize";


import "jquery";
import "materialize-css/dist/js/materialize.js";


class TourModal extends Component {

  


  render() {
   
    
    return (
      <Modal
        actions={
          <div>
      
            <Button
              type="button"
              id="userLogin"
              className="modal-close btn  blue"
            >
              Close
            </Button>
          </div>
        }
       
        role="dialog"
        header="Admin, Employee or Customer Log-In"
        trigger={<Button className="blue">Tour The Site</Button>}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              
               
                  <Row s={12}>
                      <Col s={6}>
                  <Collection  header='UserNames' >
  <CollectionItem>admin@gmail.com</CollectionItem>
  <CollectionItem>employee@gmail.com</CollectionItem>
  <CollectionItem>customer@gmail.com</CollectionItem>
</Collection></Col>
<Col s={6}>
<Collection header='Passwords'>
  <CollectionItem>admin18</CollectionItem>
  <CollectionItem>barber18</CollectionItem>
  <CollectionItem>customer18</CollectionItem>
</Collection></Col>
                  
                  </Row>
             
            
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default TourModal;
