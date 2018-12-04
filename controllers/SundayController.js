const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Sunday.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findAll: function(req, res) {
    
    db.Sunday.findAll({where:{EmployeeId:req.params.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  delete: function(req, res) {
    db.Sunday.destroy({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  update: function(req, res) {
    console.log(req.body)
    db.Sunday
      .update(req.body, { where: { EmployeeId: req.params.id }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};