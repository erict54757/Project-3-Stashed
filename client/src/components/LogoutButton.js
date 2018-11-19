import React from "react";
import { Button} from "react-materialize";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

const LogoutButton = props=> (

    <Button style={{marginBottom:"10px;"}} className="blue" value={props.id} >Log Out
    </Button> 
    );
    export default LogoutButton