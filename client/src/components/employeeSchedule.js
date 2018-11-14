import React from "react";
import { Row, Carousel} from "react-materialize";
import EmployeeScheduleModal from "./employeeScheduleModal";
import "jquery";
import Appointment from "./DumbApptCard"
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class EmployeeSchedule extends React.Component {
  state ={
    appointments: [{ id:1, time: "8:30", name:"eric" },{id:2,  time: "8:45", name:"drew" },{ id:3, time: "9:30", name:"nicole" },{ id:4, time: "10:30", name:"eric" }]
  
    
};

  render() {
    return (
      <div>
        <Row>
          <EmployeeScheduleModal />
        </Row>

        <Row>
          <Carousel options={{ fullWidth: false }}>
   
        
      
      {this.state.appointments.map(appointment => (
       <div>
      <Appointment
      id={appointment.id}
      time={appointment.time}
      name={appointment.name}
      />
      </div>
      ))
    }
       
          </Carousel>
        </Row>
      </div>
    );
  }
}

export default EmployeeSchedule;
