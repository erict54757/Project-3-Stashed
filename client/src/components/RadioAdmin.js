import React, { Component } from "react";
import {Input} from "react-materialize";
import Auth from "../utils/auth";
import "jquery";
import "materialize-css/dist/js/materialize.js";

class RadioAdmin extends Component {
  // changeEmployeeSchedule = employee => {
  //   this.setState({
  //     employee: employee,
  //     employeeInfoTab: false,
  //     employeeScheduleTab: true
  //   });
  // };
  state={
    active:"fill"
  }
  render () {
  return (
      
    <Input
  name="type"
  type="radio"
  label= {this.props.employee.first_name +this.props.employee.last_name}
  value=""
    style={{ fontSize: "1.3rem", marginTop: "7px" }}
    className={this.state.active}
   onChange={(e)=>this.props.select(this.props.employee)}

  />
  );
  }
};
export default RadioAdmin;
