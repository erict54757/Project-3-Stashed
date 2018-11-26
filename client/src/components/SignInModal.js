import React, { Component } from "react";
import { Modal, Button, Row, Input } from "react-materialize";
import API from "../utils/API";
import Auth from "../utils/auth";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";

import "./SignInModal.css";
class SignInModal extends Component {
  initialstate = {
    email: "",
    password: "",
    type: "",
    isLoggedIn: false,
    isAdmin: false,
    isEmployee: false,
    isCustomer: false,
    employees: [],
    customers: []
  };

  state = this.initialstate;

  componentDidMount() {
    this.loadEmployees();
    this.loadCustomers();
  }

  loadEmployees = () => {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  };

  loadCustomers = () => {
    API.getCustomers()
      .then(res => this.setState({ customers: res.data }))
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
      type: this.state.type
    };

    console.log(data);

    fetch("/login", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        // Server returns "JWT ...", so we need to split off the token
        const token = response.token.split(" ")[1];
        const name = response.name;
        const id = response.id;
        Auth.login(token, name, id);
      })
      .catch(error => console.error("Error:", error));
  };

  handleInputChage = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Modal
        actions={
          <div>
            <Button
              type="button"
              id="userLogin"
              className="modal-close btn  blue"
            >
              Close
            </Button>
            <Button
              id="sign-in"
              type="button"
              className="btn  blue"
              onClick={this.handleFormSubmit}
            >
              Login
            </Button>
          </div>
        }
        id="account-info"
        role="dialog"
        header="Sign-In"
        trigger={<Button className="blue">Sign In</Button>}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <Row>
                    <Input
                      name="type"
                      type="radio"
                      value="customer"
                      label="Customer"
                      onChange={this.handleInputChage}
                    />
                    <Input
                      name="type"
                      type="radio"
                      value="employee"
                      label="Employee"
                      onChange={this.handleInputChage}
                    />
                  </Row>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChage}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChage}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SignInModal;
