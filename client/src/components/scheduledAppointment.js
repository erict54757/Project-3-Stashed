import React from "react";
import {Col,Card} from 'react-materialize'
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';




class ScheduledAppointment extends React.Component {
    constructor() {
super();
this.state ={
    appointments: [1,2,2,3,4],
    appointmentsDiv:[]
};
//  this.state.appointments.forEach(element => {
//         let divelement = <div>{element}</div>
//     divelement.push(this.state.appointmentsDiv)
        
//     });
//     }
    // componentDidMount(){
 
         
            
    //         fetch('/api/get/appointment', {
    //             method: 'GET',
              
    //         }).then (results => {
    //             return results.json();
    //         }).then(data => {
    //             let appointments = data.results.map((something) =>{
    //                 return (
    //                     <div key={something.results.id}>
    //                     {something.results}
    //                     </div>
    //                 )
    //             })
    //             this.setState({appointments:appointments});
    //             console.log("state", this.state.appointments)
    //         })
        
    }

render() {

    return (

       



    

        <div className="container">
        <div className="row">

        <Col m={6} s={12}>
    <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
    I am a very simple card.
    <div>Appointment:{this.state.appointments}</div>
    </Card>
</Col>
        </div>
        </div>

    )
}
    }
export default ScheduledAppointment;