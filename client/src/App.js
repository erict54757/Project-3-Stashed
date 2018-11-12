import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import EmployeeSchedule from "./components/employeeSchedule";
// import NewAppointment from "./components/newAppointment";

class App extends Component {
  render() {
    return (
      <div>
        <EmployeeSchedule />
        {/* <NewAppointment /> */}
      </div>
    );
  }
}

export default App;
