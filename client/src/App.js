import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import SignUpModal from "./components/SignUpModal";
// import NavBar from "./components/NavBar";
// import Main from "./components/Main";
// import Navbar from "react-materialize/lib/Navbar";
// import { Footer } from "react-materialize";
// import PortalContainer from "./components/PortalContainer";
// import Foot from "./components/Foot"
// import EmpApptUpdateModal from "./components/EmpApptUpdateModal";
// import ManagerPortal from "./components/managerPortal";
// import PortalContainer from "./components/PortalContainer";
// import EmployeeSchedule from "./components/employeeSchedule";
// import NewAppointment from "./components/newAppointment"
// import ApptCust from "./components/ApptCust"
// import PortalFooter from "./components/PortalFooter";
import Customer from "./pages/Customer";
import Employee from "./pages/Employee";
import Admin from "./pages/Admin";

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Customer} />
        <Route exact path="/employee" component={Employee} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/customer" component={Customer} />
      </Switch>
    </div>
  </Router>
);

export default App;
