var db = require("../models");
var fs = require("fs");
var path = require("path");

module.exports = function(app) {
  //Create a new customer
  app.post("api/customers", function(req, res) {
    console.log(req.body);
    let customer = req.body;
    db.Customer.create({
      first_name: customer.firstName,
      last_name: customer.lastName,
      street: customer.street,
      city: customer.city,
      state: customer.state,
      zip: customer.zip,
      email: customer.email,
      phone: customer,
      account_key: customer.password
    });
  });
};
