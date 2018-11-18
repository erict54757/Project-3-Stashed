import axios from "axios";

export default {
  // Gets info of Customer
  getCustomer: function() {
    return axios.get("/api/customer");
  },
  // Gets the book with the given id
  deleteAppointment: function(id) {
    return axios.delete("/api/appointment/delete/" + id);
  },
 
};
