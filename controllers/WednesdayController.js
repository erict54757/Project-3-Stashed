const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Wednesday.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findAll: function(req, res) {
    
    db.Wednesday.findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  delete: function(req, res) {
    db.Wednesday.destroy({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  update: function(req, res) {
    console.log(req.body)
    db.Wednesday
      .update(req.body, { where: { EmployeeId: req.params.id }})
      .then(dbModel =>console.log( res.json(dbModel.body)))
      .catch(err => res.status(422).json(err));
  },
};