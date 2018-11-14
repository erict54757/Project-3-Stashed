import React, { Component } from 'react';
import { Footer  } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";



class PortalFooter extends Component {

render(){
    return(


<Footer 
 
  links={
    <ul>
      <li><a className="grey-text text-lighten-3" href="#!">Employee Log In</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Sign Out</a></li>
    </ul>
  }
  className='black footer'
>
   
   
</Footer>
    )
}
}
export default PortalFooter