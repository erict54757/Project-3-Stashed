import axios from "axios";

export default {
  // Saves a employee to the employee database
  saveEmployee: function(employeeData) {
    return axios.post("/api/employees", employeeData);
  },
  // Gets ALLLLLL employee info
  getEmployees: function() {
    return axios.get("/api/employees");
  },
  // Gets employee info
  getEmployee: function(id) {
    return axios.get("/api/employees/" + id);
  },
  // delete employee info
  deleteEmployee: function(id) {
    return axios.delete("/api/employees/" + id);
  },
  // Saves a customer to the database
  saveCustomer: function(customerData) {
    return axios.post("/api/customers", customerData);
  },
  // Gets info of Customer
  getCustomers: function() {
    return axios.get("/api/customers");
  },
  // sends updated customer data and corresponding appointment data. must update both customer and appointment
  updateCustomer: function(id, customerData) {
    return axios.put("/api/customers/" + id, customerData);
  },
  updateAppointment: function(id, appointmentData) {
    return axios.put("/api/appointments/" + id, appointmentData);
  },
  // Saves an appointment to the database
  saveAppointment: function(appointmentData) {
    return axios.post("/api/appointments", appointmentData);
  },
  // Gets all appointments
  getAppointments: function() {
    return axios.get("/api/appointments");
  },
  //deletes an appointment with a given id
  deleteAppointment: function(id) {
    return axios.delete("/api/appointments/" + id);
  },
  sendEmail: function(emailData) {
    return axios.post("/api/sendEmail", emailData);
  },
  saveDay: function(dayData) {
    return axios.post("/api/days", dayData);
  },
   // Gets all days
   getDays: function() {
    return axios.get("/api/days");
  },
  // Updates day to true or false
  changeDayOn: function(id, dayData) {
    return axios.put("/api/days/Sunday/on/" + id, dayData);
  },
  changeDayOff: function(id, dayData) {
    return axios.put("/api/days/Sunday/off/" + id, dayData);
  },
  updateSunday: function(id, dayData) {
    return axios.put("/api/Sunday/" + id, dayData);
  },
  getSunday: function(id) {
    return axios.get("/api/Sunday/"+id);
  },
};
