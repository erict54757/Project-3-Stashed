import React, { Component } from "react";
import { Modal, Button, Row, Input } from "react-materialize";
import API from "../utils/API";
import Auth from "../utils/auth";
import { Redirect } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "./SignInModal.css";

function validate(type, email, password) {
  // true means invalid, so our conditions got reversed
  return {  
    type: type.length===0,
    email: email.length <7,
    password: password.length ===0
   
   
  };
}
class SignInModal extends Component {
  state = {
    email: "",
    password: "",
    type: "",
    employees: [],
    customers: [],
    loggedIn: "",
    touched: { 
      type:false,
       email: false,
      password: false
     
    }, 
  };
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }
  canBeSubmitted() {
    const errors = validate(this.state.type,this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
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
        const isEmp = response.isEmp;
        const isCust = response.isCust;
        Auth.login(token, name, id, isEmp, isCust);
      })
      .then(res => this.setState({ loggedIn: "1" }))
      .catch(error => console.error("Error:", error));
  };

  handleInputChage = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    if (this.state.loggedIn === "1") {
      return <Redirect to="/customer" />;
    }
  const errors = validate(this.state.type, this.state.email, this.state.password);
  const isDisabled = Object.keys(errors).some(x => errors[x]);
  const shouldMarkError = (field) => {
    const hasError = errors[field];
    const shouldShow = this.state.touched[field];
    return hasError ? shouldShow : false;
  };
    return (
      <Modal
        actions={
          <div>
            <Button
              id="sign-in"
              type="button"
              className="btn  blue modal-close waves-effect waves-blue"
              disabled={isDisabled}
              onClick={this.handleFormSubmit}
             
            >
              Login
            </Button>
            <Button
              type="button"
              id="userLogin"
              className="modal-close btn  blue waves-effect waves-blue"
            >
              Close
            </Button>
          </div>
        }
        id="account-info"
        role="dialog"
        header="Sign-In"
        trigger={<Button className="blue waves-effect waves-blue">Sign In</Button>}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <Row>
                    <Input
                    className={shouldMarkError('type') ? "error invalid" : "filled-in"}
                      name="type"
                      type="radio"
                      value="customer"
                      label="Customer"
                      onChange={this.handleInputChage}
                      onBlur={this.handleBlur('type')}
                    />
                    <Input
                    className={shouldMarkError('type') ? "error invalid" : ""}
                      name="type"
                      type="radio"
                      value="employee"
                      label="Employee"
                      onChange={this.handleInputChage}
                      onBlur={this.handleBlur('type')}
                    />
                  </Row>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className={shouldMarkError('email') ? "error invalid" : ""}
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChage}
                    onBlur={this.handleBlur('email')}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className={shouldMarkError('password') ? "error invalid" : ""} 
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChage}
                    onBlur={this.handleBlur('password')}
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
