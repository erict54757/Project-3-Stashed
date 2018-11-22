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
  delete: function(req, res) {
    db.Appointment.destroy({ where: { id: req.params.id } })
<<<<<<< HEAD
      .then(console.log("Destroyed")
      
        )
=======
      .then(dbModel ==> res.json(dbModel))
>>>>>>> 0add048dac9b1ce1f8eab3bbd2fe977410a584a0
      .catch(err => res.json(err));
  }
};
