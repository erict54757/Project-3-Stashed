import React, { Component } from "react";
import "./App.css";
import "./App.css";
// import ManagerPortal from "./components/managerPortal";
import EmployeeSchedule from "./components/employeeSchedule";
// import NewAppointment from "./components/newAppointment";
// import SignUpModal from "./components/SignUpModal";
// import SignInModal from "./components/SignInModal";
// import NavBar from "./components/NavBar";
// import ScheduledAppointment from "./components/scheduledAppointment"
<<<<<<< HEAD
import "./App.css";
// import NewAppointment from "./components/newAppointment"
=======
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
>>>>>>> fa1301f76a87ace9ba28a3d46a5b2294f3dc9252

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ScheduledAppointment/> */}
        {/* <NewAppointment/> */}
        {/* <ManagerPortal /> */}
      
        <EmployeeSchedule />
      </div>
    );
  }
}

export default App;
