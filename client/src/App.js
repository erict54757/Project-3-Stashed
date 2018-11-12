import React, { Component } from "react";
import SignUpModal from "./components/SignUpModal";
// import SignInModal from "./components/SignInModal";
// import NavBar from "./components/NavBar";
// import ScheduledAppointment from "./components/scheduledAppointment"
import "./App.css";
//import NewAppointment from "./components/newAppointment";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUpModal />
      </div>
    );
  }
}

export default App;
