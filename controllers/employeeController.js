const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Employee.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findAll: function(req, res) {
    db.Employee.findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  delete: function(req, res) {
    db.Employee.destroy({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
