import axios from "axios";

export default {
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
