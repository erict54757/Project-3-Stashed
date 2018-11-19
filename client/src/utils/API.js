import axios from "axios";

export default {
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
    return axios.delete("/api/appointment/delete/" + id);
  }
};
