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
    return axios.get("/api/customer");
  },
  getAppointments: function() {
    return axios.get("/api/appointments")
  },
  //deletes an appointment with a given id
  deleteAppointment: function(id) {
    return axios.delete("/api/appointment/" + id);
  },
  // sends updated customer data and corresponding appointment data. must update both customer and appointment
  updateCustomer: function(customerData) {
    return axios.put("/api/update/customer", customerData);
  }
 
};
