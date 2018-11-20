import React, { Component } from "react";
import { Modal, Button } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
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
                  <label for="inputAccount">Email</label>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label for="inputAccount">Password (min 8 characters)</label>
                  <input
                    type="password"
                    className="form-control"
                    id="account_password"
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
