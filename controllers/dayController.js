const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Day.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findAll: function (req, res) {
    db.Day.findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  delete: function (req, res) {
    db.Day.destroy({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  updateOn: function (req, res) {
    db.Day.update({ Sunday: true }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOff: function (req, res) {
    db.Day.update({ Sunday: false }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOnMonday: function (req, res) {
    db.Day.update({ Monday: true }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOffMonday: function (req, res) {
    db.Day.update({ Monday: false }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOnTuesday: function (req, res) {
    db.Day.update({ Tuesday: true }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOffTuesday: function (req, res) {
    db.Day.update({ Tuesday: false }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOnWednesday: function (req, res) {
    db.Day.update({ Wednesday: true }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOffWednesday: function (req, res) {
    db.Day.update({ Wednesday: false }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOnThursday: function (req, res) {
    db.Day.update({ Thursday: true }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOffThursday: function (req, res) {
    db.Day.update({ Thursday: false }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOnFriday: function (req, res) {
    db.Day.update({ Friday: true }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOffFriday: function (req, res) {
    db.Day.update({ Friday: false }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOnSaturday: function (req, res) {
    db.Day.update({ Saturday: true }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOffSaturday: function (req, res) {
    db.Day.update({ Saturday: false }, { where: { EmployeeId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};