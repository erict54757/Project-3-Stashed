import React, { Component } from "react";
import "./App.css";
import "./App.css";
// import ManagerPortal from "./components/managerPortal";
// import EmployeeSchedule from "./components/employeeSchedule";
import NewAppointment from "./components/newAppointment";
// import SignUpModal from "./components/SignUpModal";
// import SignInModal from "./components/SignInModal";
// import NavBar from "./components/NavBar";
// import ScheduledAppointment from "./components/scheduledAppointment"
// import NewAppointment from "./components/newAppointment"

// class Nav extends Component {
//   render() {
//     return (
//       <div className="Nav">
//         <NavBar />
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ScheduledAppointment/> */}
        <NewAppointment/>
        {/* <ManagerPortal /> */}
      
        {/* <EmployeeSchedule /> */}
      </div>
    );
  }
}

export default App;
