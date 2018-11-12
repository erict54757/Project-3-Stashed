import React, { Component } from "react";
import ScheduledAppointment from "./components/scheduledAppointment"
import "./App.css";
// import NewAppointment from "./components/newAppointment"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScheduledAppointment/>
          {/* <NewAppointment/> */}
       
      </div>
    );
  }
}

export default App;
