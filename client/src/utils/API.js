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
  getCustomer: function() {
    return axios.get("/api/customers");
  },
  // Gets the book with the given id
  deleteAppointment: function(id) {
    return axios.delete("/api/appointment/" + id);
  }
};
