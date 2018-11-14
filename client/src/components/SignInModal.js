import React, { Component } from 'react';
import { Modal, Button } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class SignInModal extends Component {
  render() {
    return (
      <Modal
        id="account-info"
        role="dialog"
        header="Credentials"
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

            <div className="modal-footer">
              <Button
                id="sign-in"
                type="button"
                className="btn  blue"
              >
                Login
              </Button>
              <Button
                type="button"
                id="userLogin"
                className="modal-close btn  blue"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SignInModal;
