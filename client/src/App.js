import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

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
