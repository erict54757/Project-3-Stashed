import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./utils/auth";
import Customer from "./pages/Customer";
import Employee from "./pages/Employee";
import Admin from "./pages/Admin";

class App extends React.Component {
  state = {
    token: Auth.getToken()
  };

  componentDidMount() {
    Auth.onAuthChange(this.handleAuthChange);
  }

  handleAuthChange = token => {
    this.setState({ token });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Customer
                  isLoggedIn={this.state.isLoggedIn}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/employee"
              component={() => (
                <Employee
                  isLoggedIn={this.state.isLoggedIn}
                  user={this.state.user}
                />
              )}
            />
            <Route exact path="/admin" component={Admin} />
            <Route
              exact
              path="/customer"
              component={() => (
                <Customer
                  isLoggedIn={this.state.isLoggedIn}
                  user={this.state.user}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
