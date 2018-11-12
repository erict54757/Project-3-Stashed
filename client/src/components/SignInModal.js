import React from "react";
import { Modal, Button } from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class SignInModal extends React.Component {
  render() {
    return (
      <Modal
        id="account-info"
        role="dialog"
        header="Credentials"
        trigger={<Button>Sign In</Button>}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="inputAccount">Email</label>
                  <input type="text" class="form-control" id="email" />
                </div>
                <div class="form-group">
                  <label for="inputAccount">Password (min 8 characters)</label>
                  <input
                    type="password"
                    class="form-control"
                    id="account_password"
                  />
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <Button
                id="sign-in"
                type="button"
                class="btn btn-primary blue lighten-1"
              >
                Login
              </Button>
              <Button
                type="button"
                href="#"
                id="userLogin"
                class="modal-close btn btn-secondary blue lighten-1"
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
