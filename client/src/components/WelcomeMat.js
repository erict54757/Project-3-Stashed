import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";


const WelcomeMat = props=> (

    <h5  style={{marginTop:"29px"}} className= "sid-nav" value={props.id} >Welcome, {props.name}
    </h5> 
    );
    export default WelcomeMat