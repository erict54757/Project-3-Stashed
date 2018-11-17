import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import SignInModal from "./components/SignInModal"
// import NavBarCust from "./components/NavBarCust"
// import NavBar from "./components/NavBar";
// import Main from "./components/Main";
// import Navbar from "react-materialize/lib/Navbar";
// import { Footer } from "react-materialize";
// import PortalContainer from "./components/PortalContainer";
// import Foot from "./components/Foot"
import EmpApptUpdateModal from "./components/EmpApptUpdateModal"
// import ManagerPortal from "./components/managerPortal";
//import EmployeeSchedule from "./components/employeeSchedule";
// import NewAppointment from "./components/newAppointment"
// import ApptCust from "./components/ApptCust"
// import PortalFooter from "./components/PortalFooter";

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
      {/* <NavBarCust/>
        <Main />
        <Foot/>  */}
        {/* <NavBar/>
 <PortalContainer/> */}
        {/* <ApptCust/> */}
        {/* <NewAppointment/> */}
        <EmpApptUpdateModal/>
        {/* <SignInModal/> */}
        {/* <EmployeeSchedule /> */}
        {/* <PortalFooter/> */}
   
      </div>
    );
  }
}

export default App;
