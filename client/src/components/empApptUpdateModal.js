import React, { Component } from "react";
import { Modal, Button, NavItem, Dropdown, Input } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./empApptUpdateModal.css"
class SignUpModal extends Component {
  render() {
    return (
      <Modal
        id="account-signUp"
        role="dialog"
        header="Create Your Account"
        trigger={<Button className="btn blue">Update</Button>}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form id="create-form">
                <div className="form-row">
                  <div className="form-group col-md-6">
                   
                    <Input
                      type="text"
                      className="form-control"
                      id="inputFirst"
                      placeholder={this.props.firstName}
                      value={this.state.firstName}
                            onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                   
                    <Input
                      type="text"
                      className="form-control"
                      id="inputLast"
                      placeholder={this.props.lastName}
                      value={this.state.lastName}
                            onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                 
                    <Input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder={this.props.email} 
                      value={this.state.email} 
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                   

                    <Input
                      type="text"
                      className="form-control"
                      id="inputPhone"
                      placeholder={this.props.telephone} 
                      value={this.state.telephone} 
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                
                  <Input
                    type="text"
                    className="form-control"
                    id="inputStreet"
                    placeholder={this.props.street} 
                    value={this.state.street} 
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                   
                    <Input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      placeholder={this.props.city} 
                      value={this.state.city} 
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                   
                    <Input
                      type="text"
                      className="form-control"
                      id="inputState"
                      placeholder={this.props.state} 
                      value={this.state.state} 
                      onChange={this.handleInputChange}
                    />
                    <Dropdown
                      trigger={<Button className="teal">State</Button>}
                      placeholder={this.props.state}
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

                    <div className="form-group col-md-2">
                     
                      <Input
                        type="text"
                        className="form-control"
                        id="inputZip"
                        placeholder="12567"
                        value={this.state.zip} 
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                    
                      <Input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder={this.props.password}
                        value={this.state.password} 
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="">
                    <Button
                      type="submit"
                      id="add-account"
                      className="btn modal-close blue"
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
