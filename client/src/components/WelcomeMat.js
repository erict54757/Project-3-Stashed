import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";


const WelcomeMat = props=> (

    <h5 style={{marginTop:"20px"}} className={props.textColor} value={props.id} >Welcome, {props.name}
    </h5> 
    );
    export default WelcomeMat