import React, { Component } from 'react';
import { Row, Col, Tab, Tabs } from "react-materialize";
import ManagerPortal from "./managerPortal";

// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";



class PortalContainer extends Component {

render(){
    return(

<div className="container">
<Row>
<Tabs className='tab-demo z-depth-1'>
    <Tab title="Test 1">Test 1</Tab>
    <Tab title="Test 2" active>Test 2</Tab>
    <Tab title="Test 3">Test 3</Tab>
    <Tab title="Test 4">Test 4</Tab>
</Tabs>

    <Row >
     <ManagerPortal/>
    
    </Row>

</Row>
</div>
    )
}
}
export default PortalContainer