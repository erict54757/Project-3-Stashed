import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./App.css";
import NavBar from "./components/NavBar";
import PortalFooter from "./components/PortalFooter";
import PortalContainer from "./components/PortalContainer";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";
import ManagerPortal from "./components/managerPortal";
import EmployeeSchedule from "./components/employeeSchedule";
import NewAppointment from "./components/newAppointment";
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


class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar/>
       <PortalContainer/>
       <PortalFooter/>
     {/* // {<ApptCust/>} */}
        {/* <NewAppointment/> */}
        {/* <ManagerPortal /> */}
        {/* <EmployeeSchedule /> */}
    
      </div>
    );
  }
}

export default App;
