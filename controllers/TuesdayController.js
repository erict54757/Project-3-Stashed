const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Tuesday.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findAll: function(req, res) {
    
    db.Tuesday.findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  delete: function(req, res) {
    db.Tuesday.destroy({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  update: function(req, res) {
    console.log(req.body)
    db.Tuesday
      .update(req.body, { where: { EmployeeId: req.params.id }})
      .then(dbModel =>console.log( res.json(dbModel.body)))
      .catch(err => res.status(422).json(err));
  },
};