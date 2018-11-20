const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Appointment.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findAll: function(req, res) {
    db.Appointment.findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
};
