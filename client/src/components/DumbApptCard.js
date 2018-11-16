import React from "react";
import { Col, Card, Button} from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

const Appointment = props=> (
    
    
      <Card 
        className="blue-grey darken-1"
        textClassName="white-text"
        title="Appointment With:"
      >
      
      <h5>{props.name}</h5>
        <div >At {props.time}</div>
        <Button className="red" value={props.id} >X
         </Button> 
      </Card>
 
  

 );
 export default Appointment