import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";
import Auth from "./utils/auth";
import Customer from "./pages/Customer";
import Employee from "./pages/Employee";
import Admin from "./pages/Admin";

class App extends React.Component {
  state = {
    token: Auth.getToken(),
    name: Auth.getName(),
    id: Auth.getId()
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
              component={Customer}
              token={this.state.token}
              name={this.state.name}
              id={this.state.id}
            />
            <PrivateRoute
              exact
              path="/employee"
              component={Employee}
              token={this.state.token}
              name={this.state.name}
              id={this.state.id}
            />
            <PrivateRoute
              exact
              path="/admin"
              component={Admin}
              token={this.state.token}
              name={this.state.name}
              id={this.state.id}
            />
            <PrivateRoute
              exact
              path="/customer"
              component={Customer}
              token={this.state.token}
              name={this.state.name}
              id={this.state.id}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, token, name, id, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      token ? (
        <Component {...props} token={token} name={name} id={id} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default App;
