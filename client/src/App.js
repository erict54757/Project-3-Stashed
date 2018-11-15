import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
// import ManagerPortal from "./components/managerPortal";
//import EmployeeSchedule from "./components/employeeSchedule";
// import NewAppointment from "./components/newAppointment";
// import SignUpModal from "./components/SignUpModal";
// import SignInModal from "./components/SignInModal";
// import NavBar from "./components/NavBar";
// import ScheduledAppointment from "./components/scheduledAppointment"
// import NewAppointment from "./components/newAppointment"
import Main from "./components/Main";
=======
import "./App.css";
// import NavBar from "./components/NavBar";
// import SignUpModal from "./components/SignUpModal";
// import SignInModal from "./components/SignInModal";
// import ManagerPortal from "./components/managerPortal";
// import EmployeeSchedule from "./components/employeeSchedule";
// import NewAppointment from "./components/newAppointment";
import ApptCust from "./components/ApptCust"

// const App = () => (
//   <Router>
//     <div className="App">
//     <NavBar />
//     <Route exact path="/" component={Home} />
//     <Route exact path="/employee" component={employee} />
//     <Route exact path="/manager" component={manager} />
//     <Route exact path="/customer" component={customer} />
//     </div>
//     </Router>
//   );

>>>>>>> e2ce7c2cd54789eca7899033ced0c82e9c1ff694

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Main />
=======

        <ApptCust/>
        {/* <NewAppointment/> */}
        {/* <ManagerPortal /> */}
        {/* <EmployeeSchedule /> */}
>>>>>>> e2ce7c2cd54789eca7899033ced0c82e9c1ff694
      </div>
    );
  }
}

export default App;
