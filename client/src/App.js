import React, { Component } from "react";
import "./App.css";
import EmployeeSchedule from "./components/employeeSchedule";
// import NewAppointment from "./components/newAppointment";
import SignUpModal from "./components/SignUpModal";
// import SignInModal from "./components/SignInModal";
// import NavBar from "./components/NavBar";
// import ScheduledAppointment from "./components/scheduledAppointment"
import "./App.css";
// import NewAppointment from "./components/newAppointment"

class App extends Component {
  render() {
    return (
      <div>
        <EmployeeSchedule />
     
      <div className="App">
        {/* <ScheduledAppointment/> */}
          {/* <NewAppointment/> */}
       
      </div>
      </div>
    );
  }
}

export default App;
