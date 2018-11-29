import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";

// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import API from "../utils/API";
import "./CustContact.css";

function validate(subject, message,email, phoneNumber) {
  // true means invalid, so our conditions got reversed
  return {
    subject: subject.length === 0,
   message: message.length === 0,
     phoneNumber: phoneNumber.length === 0,
    email: email.length === 0
  };
}

class CustContact extends Component {
  constructor() {
    super();

  this.state = {
    touched: { 
      subject: false,
     message: false,
       email: false,
      phoneNumber: false
     
    }, subject:"",
    message:"",
    phoneNumber:"",
    email:"",
    sent: false
};


this.handleInputChange= this.handleInputChange.bind(this)
this.handleSendEmail=this.handleSendEmail.bind(this)
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }
  
handleInputChange = event => {
  event.preventDefault();
  // Getting the value and name of the input which triggered the change
  let value = event.target.value;
  const name = event.target.name;

  // Updating the input's state
  this.setState({
    [name]: value
  });
  
};
handleSendEmail = event => {
  if (!this.canBeSubmitted()) {
   
    const {subject, message,email,  phoneNumber } = this.state;
    alert(`Signed up with email: ${email} subject: ${subject}`);
    return;
  } this.sendEmail(this.state);
};
canBeSubmitted() {
  const errors = validate( this.state.subject, this.state.message,this.state.email, this.state.phoneNumber);
  const isDisabled = Object.keys(errors).some(x => errors[x]);
  return !isDisabled;
}

resetState= ()=>{
  this.setState({
      subject:"",
      message:"",
      phoneNumber:"",
      email:"",
      sent: true
      ,
     touched: {
       subject:false,
      message:false,
      email:false,
      phoneNumber:false
      }

})}
sendEmail= (event)=>{
  API.sendEmail(event,
    {email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      subject: this.state.subject,
      message: this.state.message
    }).then(this.resetState());
  };
  render() {
  //   const { email, message,subject,phoneNumber } = this.state;
  //   const isEnabled =
  // this.state.email.length > 0 &&
  // this.state.message.length > 0 &&
  // this.state.subject.length > 0 &&
  // this.state.phoneNumber.length > 9;
  const errors = validate( this.state.subject, this.state.message,this.state.email, this.state.phoneNumber);
  const isDisabled = Object.keys(errors).some(x => errors[x]);
  
  const shouldMarkError = (field) => {
    const hasError = errors[field];
    const shouldShow = this.state.touched[field];
    
    return hasError ? shouldShow : false;
  };
  
 
  
    return (
      <div className="container ">
        <Row className="center">
          <h3>
            <i className="mdi-content-send brown-text" />
          </h3>
          <h4 className="center">Contact Us</h4>

          <div
            className="col l8 m8 s12 offset-l2 offset-m2 center formEmail"
            
          >
       
              <input s={12}
                 className={shouldMarkError('subject') ? "error" : ""}
                type="text"
                name="subject"
                value={this.state.subject}
                maxLength="30"
                onChange={this.handleInputChange}
                onBlur={this.handleBlur('subject')}
                placeholder="Subject"
              />
            
    
              <textarea className={shouldMarkError('message') ? "error" : ""}
              value={this.state.message}
                name="message"
                type="text"
                placeholder="Message"
                maxLength="140"
                rows="20"
                onBlur={this.handleBlur('message')}
                onChange={this.handleInputChange}
              />
              <span className="section scrollspy">
              {this.state.sent ?(
                <p id="characterLeft" className="help-block ">
                  Thank You For Contacting Us. We Will Get Back To You As Soon As Possible.
                </p>):(<p>You have {140 - this.state.message.length} characters left.</p>)}
              </span>
           

            {/* <!-- set the reply-to address --> */}
            <Row>
              <Input
              s={6}
                className={shouldMarkError('email') ? "error" : ""}
                type="email"
                name="email"
                placeholder="Your Email"
                value={this.state.email}
                onChange={this.handleInputChange}
                onBlur={this.handleBlur('email')}
              />

              <Input
              s={6}
              className={shouldMarkError('phoneNumber') ? "error" : ""}
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                value={this.state.phoneNumber}
                onBlur={this.handleBlur('phoneNumber')}
                onChange={this.handleInputChange}
              />
            </Row>

            <Button
              className="btn waves-effect waves-blue blue"
              type="submit"
              name="Submit"
              disabled={isDisabled}
              onClick={this.handleSendEmail}
            >
              Submit
            </Button>
          </div>
        </Row>
      </div>
    );
  }
}
export default CustContact;
