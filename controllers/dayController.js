const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Day.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findAll: function(req, res) {
    db.Day.findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  delete: function(req, res) {
    db.Day.destroy({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  updateOn: function(req, res) {
    console.log("helllllooooooo"+req.body.name)
    console.log("helllllooooooo"+req.params.id )
    db.Day.update({ Sunday : true },{ where : { EmployeeId : req.params.id }})
  

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOff: function(req, res) {

    console.log("helllllooooooo"+req.body.name)
    console.log("helllllooooooo"+req.params.id )
    db.Day.update({ Sunday : false },{ where : { EmployeeId : req.params.id }})
  

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};