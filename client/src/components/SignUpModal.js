import React from "react";
import { Modal, Button, NavItem, Dropdown } from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

class SignUpModal extends React.Component {
  render() {
    return (
      <Modal
        id="account-signUp"
        role="dialog"
        header="Create Your Account"
        trigger={<Button>Sign Up</Button>}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <form id="create-form">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputFirst">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputFirst"
                      placeholder="John"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputLast">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputLast"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPhone">Phone</label>

                    <input
                      type="text"
                      class="form-control"
                      id="inputPhone"
                      placeholder="4155551234"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputStreet">Street</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputStreet"
                    placeholder="1234 Your St"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                      placeholder="Your City"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputCity">State</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputState"
                      placeholder="Your State"
                    />
                    <Dropdown
                      trigger={<Button>State</Button>}
                      class="btn blue lighten-1"
                      data-target="inputState"
                    >
                      <NavItem value="AL">Alabama</NavItem>
                      <NavItem divider />
                      <NavItem value="AK">Alaska</NavItem>
                      <NavItem divider />
                      <NavItem value="AZ">Arizona</NavItem>
                      <NavItem divider />
                      <NavItem value="AR">Arkansas</NavItem>
                      <NavItem divider />
                      <NavItem value="CA">California</NavItem>
                      <NavItem divider />
                      <NavItem value="CO">Colorado</NavItem>
                      <NavItem divider />
                      <NavItem value="CT"> Connecticut </NavItem>
                      <NavItem divider />
                      <NavItem value="DE"> Delaware </NavItem>
                      <NavItem divider />
                      <NavItem value="DC"> District Of Columbia </NavItem>
                      <NavItem divider />
                      <NavItem value="FL"> Florida </NavItem>
                      <NavItem divider />
                      <NavItem value="GA"> Georgia </NavItem>
                      <NavItem divider />
                      <NavItem value="HI"> Hawaii </NavItem>
                      <NavItem divider />
                      <NavItem value="ID"> Idaho </NavItem>
                      <NavItem divider />
                      <NavItem value="IL"> Illinois </NavItem>
                      <NavItem divider />
                      <NavItem value="IN"> Indiana </NavItem>
                      <NavItem divider />
                      <NavItem value="IA"> Iowa</NavItem>
                      <NavItem divider />
                      <NavItem value="KS">Kansas</NavItem>
                      <NavItem divider />
                      <NavItem value="KY">Kentucky</NavItem>
                      <NavItem divider />
                      <NavItem value="LA">Louisiana</NavItem>
                      <NavItem divider />
                      <NavItem value="ME">Maine</NavItem>
                      <NavItem divider />
                      <NavItem value="MD">Maryland</NavItem>
                      <NavItem divider />
                      <NavItem value="MA">Massachusetts</NavItem>
                      <NavItem divider />
                      <NavItem value="MI">Michigan</NavItem>
                      <NavItem divider />
                      <NavItem value="MN">Minnesota</NavItem>
                      <NavItem divider />
                      <NavItem value="MS">Mississippi</NavItem>
                      <NavItem divider />
                      <NavItem value="MO">Missouri</NavItem>
                      <NavItem divider />
                      <NavItem value="MT">Montana</NavItem>
                      <NavItem divider />
                      <NavItem value="NE">Nebraska</NavItem>
                      <NavItem divider />
                      <NavItem value="NV">Nevada</NavItem>
                      <NavItem divider />
                      <NavItem value="NH">New Hampshire</NavItem>
                      <NavItem divider />
                      <NavItem value="NJ">New Jersey</NavItem>
                      <NavItem divider />
                      <NavItem value="NM">New Mexico</NavItem>
                      <NavItem divider />
                      <NavItem value="NY">New York</NavItem>
                      <NavItem divider />
                      <NavItem value="NC">North Carolina</NavItem>
                      <NavItem divider />
                      <NavItem value="ND">North Dakota</NavItem>
                      <NavItem divider />
                      <NavItem value="OH">Ohio</NavItem>
                      <NavItem divider />
                      <NavItem value="OK">Oklahoma</NavItem>
                      <NavItem divider />
                      <NavItem value="OR">Oregon</NavItem>
                      <NavItem divider />
                      <NavItem value="PA">Pennsylvania</NavItem>
                      <NavItem divider />
                      <NavItem value="RI">Rhode Island</NavItem>
                      <NavItem divider />
                      <NavItem value="SC">South Carolina</NavItem>
                      <NavItem divider />
                      <NavItem value="SD">South Dakata</NavItem>
                      <NavItem divider />
                      <NavItem value="TN">Tennessee</NavItem>
                      <NavItem divider />
                      <NavItem value="TX">Texas</NavItem>
                      <NavItem divider />
                      <NavItem value="UT">Utah</NavItem>
                      <NavItem divider />
                      <NavItem value="VT">Vermont</NavItem>
                      <NavItem divider />
                      <NavItem value="VA">Virginia</NavItem>
                      <NavItem divider />
                      <NavItem value="WA">Washington</NavItem>
                      <NavItem divider />
                      <NavItem value="WV">West Virginia</NavItem>
                      <NavItem divider />
                      <NavItem value="WI">Wisconsin</NavItem>
                      <NavItem divider />
                      <NavItem value="WY">Wyoming</NavItem>
                    </Dropdown>

                    <div class="form-group col-md-2">
                      <label for="inputZip">Zip</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputZip"
                        placeholder="12567"
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputPassword">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword"
                        placeholder="password"
                      />
                    </div>
                  </div>

                  <div class="modal-footer">
                    <Button
                      type="submit"
                      id="add-account"
                      class="btn btn-primary modal-close blue lighten-1"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SignUpModal;
