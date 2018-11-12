import React from "react";
import { Row, Input, Button, Icon } from 'react-materialize'
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';

class NewAppointment extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/api/form-submit-url', {
            method: 'POST',
            body: data,
        });
    }


    render() {

        return (
            <div className="container">
             <div className="row">
                <Row>
                    <Input s={6} className="black-text" label="First Name" placeholder="First Name" validate><Icon>account_circle</Icon></Input>

                    <Input className="black-text" s={6} placeholder="Last Name" validate><Icon>account_circle</Icon></Input>



                    <Input s={6} className="black-text" label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
                    <Input s={6} className="black-text"  type='date' label="Select Date" defaultValue='2'><Icon>phone</Icon></Input>

                    <div s={6}></div>
                    <Input s={12} className="black-text"  name='on' type='time' placeholder="Time" onChange={function (e, value) { }} > <Icon>phone</Icon> </Input>
                   
 
                    <Button type="submit"  className="btn btn-primary blue lighten-1 col l3" style={{ marginTop: "10px" }} onClick={function (e, value) { }}>Submit</Button>

                </Row>
                </div>
            </div>






        )
    }















}
export default NewAppointment;