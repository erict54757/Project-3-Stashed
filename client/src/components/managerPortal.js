import React, { Component } from "react";
import { Row, CardPanel, Input, Icon, Tab, Tabs, Col, Button, Card } from "react-materialize";
import ManagerPortalModal from "./managerPortalModal";
import DaySchedule from "./DaySchedule"
import "jquery";
import "materialize-css/dist/js/materialize.js";

import moment from "moment";
import API from "../utils/API";
import "./managerPortal.css";
// import { not } from "ip";

class ManagerPortal extends Component {
  state = {
    date: moment().format("DD MMMM, YYYY"),
    Appointments: [],
    appt: [],
    Customers: [],
    filtered: [],
    employees: [],
    employee: [],
    custName: "",
    employeeInfoTab: true,
    employeeScheduleTab: true,
    scheduleTab: true,
    active: "",
    Days: [],
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: []
  };


  componentDidMount() {
    this.loadEmployees();
    this.loadAppointments();
    this.getCustomers();
    this.loadDays()
    this.loadDayShift()
    this.loadDayShiftMonday();
    this.loadDayShiftTuesday();
    this.loadDayShiftWednesday();
    this.loadDayShiftThursday();
    this.loadDayShiftFriday();
    this.loadDayShiftSaturday();


  }

  getCustomers = () => {
    API.getCustomers()
      .then(res => this.setState({ Customers: res.data }))
      .catch(err => console.log(err));
  };
  loadDays = () => {
    API.getDays()
      .then(res => this.setState({ Days: res.data }))
      .catch(err => (err));
  };

  loadEmployees = () => {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  };
  //displaying the chosen employee
  setActive = (employee) => {
    this.setState({
      active: employee.id,
      employee: employee,
      employeeInfoTab: false,
      employeeScheduleTab: true
    });
  };

  changeEmployee = employee => {
    this.setState({
      active: employee.id,
      employee: employee,
      employeeInfoTab: true
    });
  };
  changeEmployeeSchedule = employee => {
    this.setState({
      active: employee.id,
      employee: employee,
      employeeInfoTab: false,
      employeeScheduleTab: true
    });
  };
  changeSchedule = employee => {
    this.setState({
      active: employee.id,
      employee: employee,
      employeeInfoTab: false,
      employeeScheduleTab: false,
      scheduleTab: true
    })
  };

  deleteEmployee = id => {
    API.deleteEmployee(id)
      .then(res => {
        this.loadEmployees();
      })
      .then(res => {
        this.setState({ employee: [] });
      })
      .catch(err => console.log(err));
  };

  // Updating employees appointments
  // ====================================================================

  loadAppointments = () => {
    API.getAppointments()
      .then(res => this.setState({ Appointments: res.data }))
      .catch(err => console.log(err));
  };

  deleteAppointment = id => {
    API.deleteAppointment(id)
      .then(res => this.loadAppointments())
      .catch(err => console.log(err));
  };

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
  handleDateChange = event => {
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value,
      employeeInfoTab: false
    });
  };
  //Employee Day Shift Cards
  loadDayShift = (id) => {
    API.getSunday(this.state.employee.id)
      .then(res =>
        this.setState({
          Sunday: res.data
        })
      )
      .catch(err => console.log(err));
  }
  loadDayShiftMonday = (id) => {
    API.getMonday(this.state.employee.id)
      .then(res =>
        this.setState({
          Monday: res.data
        })
      )
      .catch(err => console.log(err));
  }
  loadDayShiftTuesday = (id) => {
    API.getTuesday(this.state.employee.id)
      .then(res =>
        this.setState({
          Tuesday: res.data
        })
      )
      .catch(err => console.log(err));
  }
  loadDayShiftWednesday = (id) => {
    API.getWednesday(this.state.employee.id)
      .then(res =>
        this.setState({
          Wednesday: res.data
        })
      )
      .catch(err => console.log(err));
  }
  loadDayShiftThursday = (id) => {
    API.getThursday(this.state.employee.id)
      .then(res =>
        this.setState({
          Thursday: res.data
        })
      )
      .catch(err => console.log(err));
  }
  loadDayShiftFriday = (id) => {
    API.getFriday(this.state.employee.id)
      .then(res =>
        this.setState({
          Friday: res.data
        })
      )
      .catch(err => console.log(err));
  }
  loadDayShiftSaturday = (id) => {
    API.getSaturday(this.state.employee.id)
      .then(res =>
        this.setState({
          Saturday: res.data
        })
      )
      .catch(err => console.log(err));
  }
  updateDayShift = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    API.updateSunday(this.state.employee.id, {
      [name]: value
    })
      .then(this.loadDayShift())
      .catch(err => console.log(err));
  }

  updateDayShiftMonday = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    API.updateMonday(this.state.employee.id, {
      [name]: value
    })
      .then(this.loadDayShiftMonday())
      .catch(err => console.log(err));
  }
  updateDayShiftTuesday = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    API.updateTuesday(this.state.employee.id, {
      [name]: value
    })
      .then(this.loadDayShiftTuesday())
      .catch(err => console.log(err));
  }
  updateDayShiftWednesday = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    API.updateWednesday(this.state.employee.id, {
      [name]: value
    })
      .then(this.loadDayShiftWednesday())
      .catch(err => console.log(err));
  }
  updateDayShiftThursday = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    API.updateThursday(this.state.employee.id, {
      [name]: value
    })
      .then(this.loadDayShiftThursday())
      .catch(err => console.log(err));
  }
  updateDayShiftFriday = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    API.updateFriday(this.state.employee.id, {
      [name]: value
    })
      .then(this.loadDayShiftFriday())
      .catch(err => console.log(err));
  }
  updateDayShiftSaturday = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    API.updateSaturday(this.state.employee.id, {
      [name]: value
    })
      .then(this.loadDayShiftSaturday())
      .catch(err => console.log(err));
  }
  changeDayOff = (event) => {
    let Day = event.target.value
    API.changeDayOff(this.state.active, Day, {
    })
      .then(res => this.loadDays())
      .catch(err => console.log(err));
  }
  changeDayOn = (event) => {
    let Day = event.target.value
    API.changeDayOn(this.state.active, Day, {
    })
      .then(res => this.loadDays())
      .catch(err => console.log(err));
  }
  render() {
    const filteredAppointments = this.state.Appointments.filter(appointment => {
      return (
        appointment.date === this.state.date &&
        appointment.EmployeeId === this.state.employee.id
      );
    });
    const filteredDays = this.state.Days.filter(Day => {
      return (
        Day.EmployeeId === this.state.employee.id
      );
    });
    const filteredSunday = this.state.Sunday.filter(Sunday => {
      return (
        Sunday.EmployeeId === this.state.employee.id
      );
    });
    const filteredMonday = this.state.Monday.filter(Monday => {
      return (
        Monday.EmployeeId === this.state.employee.id
      );
    });
    const filteredTuesday = this.state.Tuesday.filter(Tuesday => {
      return (
        Tuesday.EmployeeId === this.state.employee.id
      );
    });
    const filteredWednesday = this.state.Wednesday.filter(Wednesday => {
      return (
        Wednesday.EmployeeId === this.state.employee.id
      );
    });
    const filteredThursday = this.state.Thursday.filter(Thursday => {
      return (
        Thursday.EmployeeId === this.state.employee.id
      );
    });
    const filteredFriday = this.state.Friday.filter(Friday => {
      return (
        Friday.EmployeeId === this.state.employee.id
      );
    });
    const filteredSaturday = this.state.Saturday.filter(Saturday => {
      return (
        Saturday.EmployeeId === this.state.employee.id
      );
    });
    const appointmentResult = function (employee, filteredAppointments) {
      if (employee && filteredAppointments) {
        return (
          <h5>
          </h5>
        );
      } else if (employee !== 0 && filteredAppointments === 0) {
        return (<h5>
          No Appointments to Display
        </h5>);
      } else if (employee === 0 && filteredAppointments === 0) {
        return (<h5>
          Select An Employee To View Appointments
        </h5>);
      }
    }
    return (
      <div className="container white">
        <div
          className="row z-depth-5 manager white"
          style={{ marginTop: "25px", marginBottom: "25px" }}
        >
          <Tabs
            className="white-text managerTabs z-depth-5"
          >
            <Tab className="text-white" title="Information" href="#employeeInfo" active={this.state.employeeInfoTab}>
              <div>
                <Row>
                  <Col style={{ marginLeft: "5px", marginTop: "10px" }}>
                    <ManagerPortalModal 
                    loadEmployees={this.loadEmployees} 
                    loadDays={this.loadDays} 
                    loadDayShift={this.loadDayShift} 
                    loadDayShiftMonday={this.loadDayShiftMonday}
                    loadDayShiftTuesday={this.loadDayShiftTuesday}
                    loadDayShiftWednesday={this.loadDayShiftWednesday}
                    loadDayShiftThursday={this.loadDayShiftThursday}
                    loadDayShiftFriday={this.loadDayShiftFriday}
                    loadDayShiftSaturday={this.loadDayShiftSaturday}/>
                  </Col>
                </Row>

                <Row>
                  <Col
                    s={12}
                    m={4}
                    className="lighten-4 black-text center employeeList"
                  >
                    {this.state.employees.length ? (
                      <ul className="collection with-header center  z-depth-1 ">
                        <li className="collection-header black white-text center">
                          <h5 className="center black white-text">Employees</h5>
                        </li>
                        {this.state.employees.map(employee => (
                          <div
                            className={employee.id === this.state.active ? "collection-item col s12 left selectEmployee blue  waves-effect waves-black"
                              : "collection-item col s12 left grey lighten-3 waves-effect waves-black"}
                            style={{ borderRadius: "5px", marginTop: "5px", padding: "0" }}
                            key={employee.id}
                            onClick={() => this.changeEmployee(employee)}
                          >
                            <div
                              style={{ fontSize: "1.3rem", marginTop: "7px" }}
                              className="left black-text"
                              href={"/employees/" + employee.id}
                            >
                              {employee.first_name} {employee.last_name}
                            </div>
                            <span
                              style={{ marginRight: "3px" }}
                              waves="light"
                              className="material-icons red-text right "
                              onClick={() => this.deleteEmployee(employee.id)}>
                              <Button className="red white-text z-depth-1 deleteEmployee" >
                                X
                                </Button>
                            </span>
                          </div>
                        ))}
                      </ul>
                    ) : (
                        <p style={{ marginLeft: "5px" }} className="left">
                          No Employees to Display
                  </p>
                      )}
                  </Col>

                  <div id="employeeInfo"
                    className="col s12 m8 lighten-4 black-text">
                    <CardPanel className="z-depth-2" style={{ marginRight: "10px" }}>
                      {this.state.employee.length !== 0 ? (
                        <div>
                          {this.state.employee.first_name ?
                            (<h4>{this.state.employee.first_name} {this.state.employee.last_name}'s Information</h4>) :
                            (<h4>Employee Information</h4>)}
                          <h5>
                            Name: {this.state.employee.first_name}{" "}
                            {this.state.employee.last_name}
                          </h5>
                          <h5>Phone: {this.state.employee.phone}</h5>
                          <h5>E-Mail: {this.state.employee.email}</h5>
                          <h5>
                            Address: {this.state.employee.street}{" "}
                            {this.state.employee.city} {this.state.employee.state}
                          </h5>
                        </div>
                      ) : (
                          <div className="row">
                            <h5>Name:</h5>
                            <h5>Phone:</h5>
                            <h5>E-Mail:</h5>
                            <h5>Address:</h5>
                            <h5 className="col s12 center">No Employee Selected</h5>
                          </div>

                        )}
                    </CardPanel>
                  </div>
                </Row>
              </div>
            </Tab>

            <Tab className="white-text" title="Appointments" href="#employeeSchedule" active={this.state.employeeScheduleTab}>
              <div>
                <Row>
                  <Col style={{ marginLeft: "5px", marginTop: "10px" }}>
                    <ManagerPortalModal 
                    loadEmployees={this.loadEmployees} 
                    loadDays={this.loadDays} 
                    loadDayShift={this.loadDayShift} 
                    loadDayShiftMonday={this.loadDayShiftMonday}
                    loadDayShiftTuesday={this.loadDayShiftTuesday}
                    loadDayShiftWednesday={this.loadDayShiftWednesday}
                    loadDayShiftThursday={this.loadDayShiftThursday}
                    loadDayShiftFriday={this.loadDayShiftFriday}
                    loadDayShiftSaturday={this.loadDayShiftSaturday}/>
                  </Col>
                </Row>

                <Row>
                  <Col
                    s={12}
                    m={4}
                    className="lighten-4 black-text center employeeList"
                  >
                    {this.state.employees.length ? (
                      <ul className="collection with-header center  z-depth-1 ">
                        <li className="collection-header black white-text center">
                          <h5 className="center black white-text">Employees</h5>
                        </li>
                        {this.state.employees.map(employee => (

                          <div
                            className={employee.id === this.state.active ? "collection-item col s12 left selectEmployee blue  waves-effect waves-black"
                              : "collection-item col s12 left grey lighten-3 waves-effect waves-black"}
                            style={{ borderRadius: "5px", marginTop: "5px", padding: "0" }}
                            key={employee.id}
                            onClick={() => this.changeEmployeeSchedule(employee)}
                          >
                            <div
                              style={{ fontSize: "1.3rem", marginTop: "7px" }}
                              className="left black-text"
                              href={"/employees/" + employee.id}
                            >
                              {employee.first_name} {employee.last_name}

                            </div>
                            <span
                              style={{ marginRight: "3px" }}
                              waves="light"
                              className="material-icons red-text right "
                              onClick={() => this.deleteEmployee(employee.id)}
                            >
                              <Button className="red white-text z-depth-1 deleteEmployee" >
                                X
                                </Button>
                            </span>
                          </div>
                        ))}
                      </ul>
                    ) : (
                        <p style={{ marginLeft: "5px" }} className="left">
                          No Schedule to Display
                  </p>
                      )}
                  </Col>


                  <Col
                    s={12}
                    m={8}
                    id="employeeSchedule"
                    className="lighten-4 black-text"
                  >
                    <CardPanel className="z-depth-2 employeeSchedule" style={{ marginRight: "10px" }}>
                      <Row className="employeeSchedule">
                        {this.state.employee.first_name ?
                          (<h4>{this.state.employee.first_name} {this.state.employee.last_name}'s Appointments</h4>) :
                          (<h4>Appointments</h4>)}

                        <Col className="date center" s={12}>

                          <Col s={1} m={2} l={2} />
                          <Input
                            s={12}
                            l={8}
                            className="center "
                            name="date"
                            type="date"
                            placeholder={this.state.date}
                            value={this.state.date}
                            onChange={this.handleDateChange}
                          >
                            <Icon>date_range</Icon>
                          </Input>
                          <Col s={1} m={2} l={2} />
                        </Col>
                      </Row>

                      <Row className="center">
                        <Col s={12} className="lighten-4 black-text ">
                          {filteredAppointments.length ? (
                            <ul className="collection with-header">
                              {filteredAppointments.map(appointment => (
                                <li
                                  className="collection-item grey lighten-3 appointmentRowContain"
                                  key={appointment.id}
                                >
                                  <div className="row appointmentRow s12">
                                    {this.state.Customers.filter(customer => {
                                      return customer.id === appointment.CustomerId;
                                    }).map(cust => (
                                      <div className="col m4 s9 appointmentName" style={{ fontSize: "1.3rem" }}>
                                        {cust.first_name} {cust.last_name}
                                      </div>
                                    ))}
                                    <div className="col m6 s9 appointmentTime" style={{ fontSize: "1.3rem" }}>
                                      {moment(appointment.date).format("DD MMM, YYYY")} {appointment.time}
                                    </div>
                                    <span
                                      className="col m2 s2 appointmentButton"
                                      onClick={() =>
                                        this.deleteAppointment(appointment.id)
                                      }
                                      className="secondary-content"
                                    >
                                      <Button className="red white-text z-depth-1 deleteAppointment" >
                                        X
                                </Button>
                                    </span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          ) : (
                              <h5 className="hide"></h5>
                            )}
                          <div>{appointmentResult(this.state.employee.length, filteredAppointments.length)}</div>

                        </Col>
                      </Row>
                    </CardPanel>
                  </Col>
                </Row>
              </div>
            </Tab>
            {/* third tab============ */}
            <Tab className="text-white" title="Schedule" href="#schedule" active={this.state.scheduleTab}>
              <div>
                <Row>
                  <Col style={{ marginLeft: "5px", marginTop: "10px" }}>
                    <ManagerPortalModal 
                    loadEmployees={this.loadEmployees} 
                    loadDays={this.loadDays} 
                    loadDayShift={this.loadDayShift} 
                    loadDayShiftMonday={this.loadDayShiftMonday}
                    loadDayShiftTuesday={this.loadDayShiftTuesday}
                    loadDayShiftWednesday={this.loadDayShiftWednesday}
                    loadDayShiftThursday={this.loadDayShiftThursday}
                    loadDayShiftFriday={this.loadDayShiftFriday}
                    loadDayShiftSaturday={this.loadDayShiftSaturday}/>
                  </Col>
                </Row>

                <Row>
                  <Col
                    s={12}
                    m={12}
                    className="lighten-4 black-text center employeeList"
                  >
                    {this.state.employees.length ? (
                      <ul className="collection with-header center  z-depth-1 ">
                        <li className="collection-header black white-text center">
                          <h5 className="center black white-text">Employees</h5>
                        </li>
                        {this.state.employees.map(employee => (
                          <div
                            className={employee.id === this.state.active ? "collection-item col l4 m6 s12 left selectEmployee blue  waves-effect waves-black"
                              : "collection-item col l4 m6 s12 left grey lighten-3 waves-effect waves-black"}
                            style={{ borderRadius: "5px", marginTop: "5px", padding: "0" }}
                            key={employee.id}
                            onClick={() => this.changeSchedule(employee)}
                          >
                            <div
                              style={{ fontSize: "1.3rem", marginTop: "7px" }}
                              className="left black-text"
                              href={"/employees/" + employee.id}
                            >
                              {employee.first_name} {employee.last_name}
                            </div>
                            <span
                              style={{}}
                              waves="light"
                              className="material-icons red-text right "
                              onClick={() => this.deleteEmployee(employee.id)}>
                              <Button className="red white-text z-depth-1 deleteEmployee" >
                                X
                                </Button>
                            </span>
                          </div>
                        ))}
                      </ul>
                    ) : (
                        <p style={{ marginLeft: "5px" }} className="left">
                          No Employees to Display
                  </p>
                      )}
                  </Col>
                  {/* display a card for each day of the week showing each employees schedule */}
                  <div
                    className="col s12  lighten-4 black-text">
                    <CardPanel className="z-depth-2  " >
                      <div className="row">
                        {filteredDays.map(Day => (
                          <div className="col s12 m6 l4 center" key="filteredDayShiftContain">
                            {filteredSunday.map(DayShift => (
                              <DaySchedule
                                dayValue="Sunday"
                                Day={Day.Sunday}
                                changeDayOn={this.changeDayOn}
                                changeDayOff={this.changeDayOff}
                                shiftStartTime={DayShift.shiftStartTime}
                                shiftEndTime={DayShift.shiftEndTime}
                                lunchStartTime={DayShift.lunchStartTime}
                                lunchEndTime={DayShift.lunchEndTime}
                                key="filteredDayShifts"
                                updateDayShift={this.updateDayShift}
                              />))}
                          </div>
                        ))}
                        {filteredDays.map(Day => (
                          <div className="col s12 m6 l4 center" key="filteredDayShiftContain">
                            {filteredMonday.map(DayShift => (
                              <DaySchedule
                                dayValue="Monday"
                                Day={Day.Monday}
                                changeDayOn={this.changeDayOn}
                                changeDayOff={this.changeDayOff}
                                shiftStartTime={DayShift.shiftStartTime}
                                shiftEndTime={DayShift.shiftEndTime}
                                lunchStartTime={DayShift.lunchStartTime}
                                lunchEndTime={DayShift.lunchEndTime}
                                key="filteredDayShifts"
                                updateDayShift={this.updateDayShiftMonday}
                              />))}
                          </div>
                        ))}
                        {filteredDays.map(Day => (
                          <div className="col s12 m6 l4 center" key="filteredDayShiftContain">
                            {filteredTuesday.map(DayShift => (
                              <DaySchedule
                                dayValue="Tuesday"
                                Day={Day.Tuesday}
                                changeDayOn={this.changeDayOn}
                                changeDayOff={this.changeDayOff}
                                shiftStartTime={DayShift.shiftStartTime}
                                shiftEndTime={DayShift.shiftEndTime}
                                lunchStartTime={DayShift.lunchStartTime}
                                lunchEndTime={DayShift.lunchEndTime}
                                key="filteredDayShifts"
                                updateDayShift={this.updateDayShiftTuesday}
                              />))}
                          </div>
                        ))}
                        {filteredDays.map(Day => (
                          <div className="col s12 m6 l4 center" key="filteredDayShiftContain">
                            {filteredWednesday.map(DayShift => (
                              <DaySchedule
                                dayValue="Wednesday"
                                Day={Day.Wednesday}
                                changeDayOn={this.changeDayOn}
                                changeDayOff={this.changeDayOff}
                                shiftStartTime={DayShift.shiftStartTime}
                                shiftEndTime={DayShift.shiftEndTime}
                                lunchStartTime={DayShift.lunchStartTime}
                                lunchEndTime={DayShift.lunchEndTime}
                                key="filteredDayShifts"
                                updateDayShift={this.updateDayShiftWednesday}
                              />))}
                          </div>
                        ))}
                        {filteredDays.map(Day => (
                          <div className="col s12 m6 l4 center" key="filteredDayShiftContain">
                            {filteredThursday.map(DayShift => (
                              <DaySchedule
                                dayValue="Thursday"
                                Day={Day.Thursday}
                                changeDayOn={this.changeDayOn}
                                changeDayOff={this.changeDayOff}
                                shiftStartTime={DayShift.shiftStartTime}
                                shiftEndTime={DayShift.shiftEndTime}
                                lunchStartTime={DayShift.lunchStartTime}
                                lunchEndTime={DayShift.lunchEndTime}
                                key="filteredDayShifts"
                                updateDayShift={this.updateDayShiftThursday}
                              />))}
                          </div>
                        ))}
                        {filteredDays.map(Day => (
                          <div className="col s12 m6 l4 center" key="filteredDayShiftContain">
                            {filteredFriday.map(DayShift => (
                              <DaySchedule
                                dayValue="Friday"
                                Day={Day.Friday}
                                changeDayOn={this.changeDayOn}
                                changeDayOff={this.changeDayOff}
                                shiftStartTime={DayShift.shiftStartTime}
                                shiftEndTime={DayShift.shiftEndTime}
                                lunchStartTime={DayShift.lunchStartTime}
                                lunchEndTime={DayShift.lunchEndTime}
                                key="filteredDayShifts"
                                updateDayShift={this.updateDayShiftFriday}
                              />))}
                          </div>
                        ))}
                        {filteredDays.map(Day => (
                          <div className="col s12 m6 l4 center" key="filteredDayShiftContain">
                            {filteredSaturday.map(DayShift => (
                              <DaySchedule
                                dayValue="Saturday"
                                Day={Day.Saturday}
                                changeDayOn={this.changeDayOn}
                                changeDayOff={this.changeDayOff}
                                shiftStartTime={DayShift.shiftStartTime}
                                shiftEndTime={DayShift.shiftEndTime}
                                lunchStartTime={DayShift.lunchStartTime}
                                lunchEndTime={DayShift.lunchEndTime}
                                key="filteredDayShifts"
                                updateDayShift={this.updateDayShiftSaturday}
                              />))}
                          </div>
                        ))}
                      
                      </div>
                    </CardPanel>
                  </div>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default ManagerPortal;
