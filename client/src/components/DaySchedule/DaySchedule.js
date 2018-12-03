import React, { Component } from "react";
import { Row, Button, Input, Card, Col } from "react-materialize";
import Auth from "../../utils/auth";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import API from "../../utils/API"

function validate(shiftStartTime, shiftEndTime, lunchStartTime, lunchEndTime) {
  // true means invalid, so our conditions got reversed
  return {

    shiftStartTime: shiftStartTime.length === 0,
    shiftEndTime: shiftEndTime.length === 0,
    lunchStartTime: lunchStartTime.length === 0,
    lunchEndTime: lunchEndTime.length === 0,
  };
}

class DaySchedule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shiftStartTime: "",
      shiftEndTime: "",
      lunchStartTime: "",
      lunchEndTime: "",
      shiftTime: [],
      touched: {
        shiftStartTime: false,
        shiftEndTime: false,
        lunchStartTime: false,
        lunchEndTime: false,
      },
      DayOnOff: this.props.Day

    }

  }
  loadDayShift = () => {
    this.props.funcGet
      .then(res => this.setState({ shiftTime: res.data })
        .then(console.log(this.state.shiftTime)))
      .catch(err => console.log(this.state.shiftTime));
    console.log(this.props.funcGet)
  }

  updateDayShift = () => {
    this.props.funcPut(this.props.EmployeeId, {
      shiftStartTime: this.state.shiftStartTime,
      shiftEndTime: this.state.shiftEndTime,
      lunchStartTime: this.state.lunchStartTime,
      lunchEndTime: this.state.lunchEndTime,
    })
      .then(res => this.loadDayShift())
      .catch(err => console.log(err));
  }
  changeDayOnOff = () => {
    API.changeDayOnOff(this.props.EmployeeId, {

    })
      .then(res => this.loadDayShift())
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.loadDayShift();
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }
  canBeSubmitted() {
    const errors = validate(this.state.shiftStartTime, this.state.shiftEndTime, this.state.lunchStartTime, this.state.lunchEndTime);
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

  render() {
    const errors = validate(this.state.shiftStartTime, this.state.shiftEndTime, this.state.lunchStartTime, this.state.lunchEndTime);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };
    return (

      <Card
        style={{ padding: "0" }}
        className={this.props.Day === false ? "red col s12 m6 l4 center z-depth-5" : "green darken-2 col s12 m6 l4 center z-depth-5"}
        key="filteredDay"
        title={this.props.Day === false ? this.props.off : this.props.on}>
        <Row><Col s={12}>
          <Button waves="light" className={this.props.Day === false ? "blue lighten-2 left" : "left grey "}>On</Button>
          <Button waves="light" className={this.props.Day === false ? "grey lighten-2 right" : "right blue darken-2 "}>Off</Button>
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
            defaultValue={this.state.shiftTime.shiftStartTime}
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
            defaultValue={this.state.shiftTime.shiftEndTime}
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
            defaultValue={this.state.shiftTime.lunchStartTime}
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
            defaultValue={this.state.shiftTime.lunchEndTime}
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
          <Button waves="light" className="blue" onClick={this.updateDayShift} disabled={isDisabled} >Save</Button>
        </Row>

      </Card>






    );
  }
};
export default DaySchedule;
