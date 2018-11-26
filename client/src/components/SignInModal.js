import React, { Component } from "react";
import { Modal, Button } from "react-materialize";
import API from "../utils/API";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";

import "./SignInModal.css";
class SignInModal extends Component {
  initialstate = {
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
            <Button id="sign-in" type="button" className="btn  blue">
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
                  <label>Email</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Password (min 8 characters)</label>
                  <input type="password" className="form-control" />
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
