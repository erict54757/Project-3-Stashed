// import React from 'react';
// import { Button } from "react-materialize";
// import "jquery";
// import "materialize-css/dist/js/materialize.js";
// import "materialize-css/dist/css/materialize.css";
// import API from "../utils/API"







// class ApptDeleteBtn extends React.Component {
//   handleInputChange = id => {
//     event.preventDefault()
//     // Getting the value and name of the input which triggered the change
//     let value = event.target.value;
//     const name = event.target.name;
//     console.log(this.state.filtered)
//     // Updating the input's state
//     this.setState({
//       ...this.state,
//       [name]: value
//     });
//   };
//   deleteAppointment = id => {
//     API.deleteAppointment(id)
//       .then(res => this.loadAppointments())
//       .catch(err => console.log(err));
//   };
//     state ={
//        Id:(this.props.id)
      
        
//     };
  
  
//     render() {
//       return (
//         <Button style={{marginBottom:"10px"}} className="red" value={this.props.id} 
//         onClick={this.handleClick(this.props.id)}
//         >X
//          </Button> 
//       )
//     }
//   }
//   export default ApptDeleteBtn;
  