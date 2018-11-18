import React, { Component } from 'react';
import { Navbar, NavItem } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import NavBarCust from "../components/NavBarCust";
import Main from "../components/Main";
import Foot from "../components/Foot";



class Customer extends Component {

    render() {
        return (
            <div>
            <NavBarCust/>
            <Main/>
            <Foot/>
            </div>





        )
    }


}
export default Customer