import axios from "axios";

export default {
  // Saves a customer to the database
  saveCustomer: function(bookData) {
    return axios.post("/api/customers", customerData);
  }
};
