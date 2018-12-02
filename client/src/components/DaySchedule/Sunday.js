import React, { Component } from "react";
import { Row,  Button, Input, Card,Col } from "react-materialize";
import Auth from "../../utils/auth";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import API from "../../utils/API"

function validate(shiftStartTime, shiftEndTime,lunchStartTime,lunchEndTime) {
  // true means invalid, so our conditions got reversed
  return {  
    
    shiftStartTime:shiftStartTime.length===0,
    shiftEndTime:shiftEndTime.length===0,
    lunchStartTime:lunchStartTime.length===0,
    lunchEndTime:lunchEndTime.length===0,
  };
}

class DaySchedule extends Component {
  constructor(props){
  super(props)
 this.state={
   shiftStartTime:"",
   shiftEndTime:"",
   lunchStartTime: "",
   lunchEndTime: "",
   shiftTime:[],
   touched: { 
    shiftStartTime:false,
    shiftEndTime:false,
    lunchStartTime: false,
    lunchEndTime: false,
  }, 
   
 }
 const loadDayShift = () => {
  this.props.funcGet()
    .then(res => this.setState({ shiftTime: res.data })
      .then(console.log(this.state.Days)))
    .catch(err => console.log(err));
}

const updateDayShift = () => {
  this.props.funcPut(this.props.EmployeeId, {
   shiftStartTime:this.state.shiftStartTime,
   shiftEndTime:this.state.shiftEndTime,
   lunchStartTime: this.state.lunchStartTime,
   lunchEndTime: this.state.lunchEndTime,
  })
    .then(res => this.props.getAppointments())
    .catch(err => console.log(err));
  }
}

componentDidMount(){
  this.loadDayShift();
}
 handleBlur = (field) => (evt) => {
  this.setState({
    touched: { ...this.state.touched, [field]: true },
  });
}
canBeSubmitted() {
  const errors = validate(this.state.shiftStartTime,this.state.shiftEndTime, this.state.lunchStartTime, this.state.lunchEndTime);
  const isDisabled = Object.keys(errors).some(x => errors[x]);
  return !isDisabled;
}

 handleInputChange = event => {
  event.preventDefault();
  // Getting the value and name of the input which triggered the change
  let value = event.target.value;
  const name = event.target.name;
  // Updating the input's state
  this.setState({
    [name]: value
  });
};

  render () {
    const errors = validate(this.state.shiftStartTime,this.state.shiftEndTime, this.state.lunchStartTime, this.state.lunchEndTime);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = (field) => {
    const hasError = errors[field];
    const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };
  return (
      
    <Card
    className={this.props.Day.Day === false ? "red col s12 m12 l6 center" : "green darken-2 col s12 m12 l6 center"}
    key="filteredDay"
    title={this.props.Day.Day === false ? "Sunday Off" : "Sunday On"}>
    <Row><Col s={12}>
      <Button waves="dark" className={this.props.Day.Day === false ? "left grey " : "blue darken-2 left"}>On</Button>
      <Button waves="dark" className={this.props.Day.Day === false ? "right blue darken-2 " : "grey lighten-2 right"}>Off</Button>
    </Col></Row>
    <Row>
      {/* Shift Start Time================================================ */}
      <Input
        name="shiftStartTime"
        label="Shift Start"
        m={6}
        s={6}
        l={6}
        type="select"
        defaultValue={this.props.shiftStartTime}
        onBlur={this.handleBlur('shiftStartTime')}
        onChange={this.handleInputChange}
        className={shouldMarkError('shiftStartTime') ? "modalDrop red-text" : "modalDrop grey lighten-2 blue-text"}
        
      >
        <option value="0800">8:00AM</option>
        <option value="0830">8:30AM</option>
        <option value="0900">9:00AM</option>
        <option value="0930">9:30AM</option>
        <option value="1000">10:00AM</option>
        <option value="1030">10:30AM</option>
        <option value="1100">11:00AM</option>
        <option value="1130">11:30AM</option>
        <option value="1200">12:00PM</option>
        <option value="1230">12:30PM</option>
        <option value="1300">1:00PM</option>
        <option value="1330">1:30AM</option>
        <option value="1400">2:00PM</option>
        <option value="1430">2:30PM</option>
        <option value="1500">3:00PM</option>
        <option value="1530">3:30PM</option>
        <option value="1600">4:00PM</option>
        <option value="1630">4:30PM</option>
        <option value="1700">5:00PM</option>
        <option value="1730">5:30PM</option>
        <option value="1800">6:00PM</option>
        <option value="1830">6:30PM</option>
        <option value="1900">7:00PM</option>
      </Input>
      {/* Shift End Time ============================================ */}
      <Input
        name="shiftEndTime"
        label="Shift End"
        m={6}
        s={6}
        l={6}
        type="select"
        onChange={this.handleInputChange}
        onBlur={this.handleBlur('shiftEndTime')}
        defaultValue={this.props.shiftEndTime}
        className={shouldMarkError('shiftEndTime') ? "modalDrop red-text" : "modalDrop grey lighten-2 blue-text"}
      >
        <option value="0800">8:00AM</option>
        <option value="0830">8:30AM</option>
        <option value="0900">9:00AM</option>
        <option value="0930">9:30AM</option>
        <option value="1000">10:00AM</option>
        <option value="1030">10:30AM</option>
        <option value="1100">11:00AM</option>
        <option value="1130">11:30AM</option>
        <option value="1200">12:00PM</option>
        <option value="1230">12:30PM</option>
        <option value="1300">1:00PM</option>
        <option value="1330">1:30AM</option>
        <option value="1400">2:00PM</option>
        <option value="1430">2:30PM</option>
        <option value="1500">3:00PM</option>
        <option value="1530">3:30PM</option>
        <option value="1600">4:00PM</option>
        <option value="1630">4:30PM</option>
        <option value="1700">5:00PM</option>
        <option value="1730">5:30PM</option>
        <option value="1800">6:00PM</option>
        <option value="1830">6:30PM</option>
        <option value="1900">7:00PM</option>
      </Input>


      {/* Lunch Start Time================================================ */}
      <Input
        name="lunchStartTime"
        label="Lunch Start"
        m={6}
        s={6}
        l={6}
        type="select"
        onChange={this.handleInputChange}
        onBlur={this.handleBlur('lunchStartTime')}
        defaultValue={this.props.lunchtStartTime}
        className={shouldMarkError('lunchStartTime') ? "modalDrop red-text" : "modalDrop grey lighten-2 blue-text"}
      >
        <option value="0000">None</option>
        <option value="0800">8:00AM</option>
        <option value="0830">8:30AM</option>
        <option value="0900">9:00AM</option>
        <option value="0930">9:30AM</option>
        <option value="1000">10:00AM</option>
        <option value="1030">10:30AM</option>
        <option value="1100">11:00AM</option>
        <option value="1130">11:30AM</option>
        <option value="1200">12:00PM</option>
        <option value="1230">12:30PM</option>
        <option value="1300">1:00PM</option>
        <option value="1330">1:30AM</option>
        <option value="1400">2:00PM</option>
        <option value="1430">2:30PM</option>
        <option value="1500">3:00PM</option>
        <option value="1530">3:30PM</option>
        <option value="1600">4:00PM</option>
        <option value="1630">4:30PM</option>
        <option value="1700">5:00PM</option>
        <option value="1730">5:30PM</option>
        <option value="1800">6:00PM</option>
        <option value="1830">6:30PM</option>
        <option value="1900">7:00PM</option>
      </Input>
      {/* Lunch End Time ============================================ */}
      <Input
        name="lunchEndTime"
        label="Lunch End"
        m={6}
        s={6}
        l={6}
        type="select"
        onChange={this.handleInputChange}
        onBlur={this.handleBlur('lunchEndTime')}
        defaultValue={this.props.lunchtEndTime}
        className={shouldMarkError('lunchEndTime') ? "modalDrop red-text" : "modalDrop grey lighten-2 blue-text"}
      >
        <option value="0000">None</option>
        <option value="0800">8:00AM</option>
        <option value="0830">8:30AM</option>
        <option value="0900">9:00AM</option>
        <option value="0930">9:30AM</option>
        <option value="1000">10:00AM</option>
        <option value="1030">10:30AM</option>
        <option value="1100">11:00AM</option>
        <option value="1130">11:30AM</option>
        <option value="1200">12:00PM</option>
        <option value="1230">12:30PM</option>
        <option value="1300">1:00PM</option>
        <option value="1330">1:30AM</option>
        <option value="1400">2:00PM</option>
        <option value="1430">2:30PM</option>
        <option value="1500">3:00PM</option>
        <option value="1530">3:30PM</option>
        <option value="1600">4:00PM</option>
        <option value="1630">4:30PM</option>
        <option value="1700">5:00PM</option>
        <option value="1730">5:30PM</option>
        <option value="1800">6:00PM</option>
        <option value="1830">6:30PM</option>
        <option value="1900">7:00PM</option>
      </Input>
      <Button waves="light" className="blue"  disabled={isDisabled} >Save</Button>
    </Row>

  </Card>






  );
  }
};
export default DaySchedule;
