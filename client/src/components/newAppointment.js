import React, { Component } from 'react';
import { Row, Input, Button, Icon } from 'react-materialize';
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import "./NewAppointment.css"

class NewAppointment extends Component {

    state = {
        firstName: "",
        lastName: "",
       telephone:"",
       date: "",
       time: ""
      };
      
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;


    // Updating the input's state
    this.setState({
        ...this.state,
      [name]: value
    });
  
  };

    handleSubmit=event=> {
        event.preventDefault();
         console.log(this.state)
    
        fetch('/api/form-submit-url', {
            method: 'POST',
            body: this.state,
        });
    }


    render() {

        return (
            <div className="container">
                <div className="row">
                    <form >
                        <Row>
                            <Input s={6} className="black-text"  placeholder="First Name" name="firstName"  
                            value={this.state.firstName}
                            onChange={this.handleInputChange}><Icon>account_circle</Icon></Input>

                            <Input className="black-text"  s={6} placeholder="Last Name"  name="lastName"  
                            value={this.state.lastName}
                            onChange={this.handleInputChange}><Icon>account_circle</Icon></Input>



                            <Input s={6} className="black-text"  validate type='tel' name="telephone" 
                            value={this.state.telephone} 
                            onChange={this.handleInputChange}><Icon>phone</Icon></Input>
                            <Input s={6} className="black-text" type='date'    name="date"  
                            value={this.state.date} onChange={this.handleInputChange} ><Icon>date_range</Icon></Input>


                            <Input s={6} className="black-text"  name='on' type='time' placeholder="Time"  name="time" 
                             value={this.state.time}  onChange={this.handleInputChange}><Icon>access_time</Icon></Input>


                            <Button className="btn btn-primary blue lighten-1 " style={{ marginLeft: "45%", marginRight: "45%" }} onClick={this.handleSubmit}>Submit</Button>

                        </Row>
                     </form>
                </div>
                </div>






                )
            } 
        }
export default NewAppointment;