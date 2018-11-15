import React, { Component } from 'react';
import { Row, Col, Tab, Tabs } from "react-materialize";
import ManagerPortal from "./managerPortal";
import EmployeeSchedule from "./employeeSchedule";
import NewAppointment from "./newAppointment";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./PortalContainer.css";


class PortalContainer extends Component {

render(){
    return(

<div className="container">
<Row>
<Tabs style={{color: "black"}} className='black-text z-depth-1'>
    <Tab className="blue-text" title="View Check Ins">View Check Ins</Tab>
    <Tab title="Checked In" active>Checked In</Tab>
    <Tab title="Employee">Employee</Tab>
    <Tab title="Admin">Admin</Tab>
</Tabs>
{/*  insert the appropriate manager component here */}
     {/* <ManagerPortal/> */}
    <EmployeeSchedule/>
    </Row>
 
</div>

    )
}
}
export default PortalContainer