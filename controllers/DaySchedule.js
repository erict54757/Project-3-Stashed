// const db = require("../models");

// module.exports = {
//   create: function(req, res) {
//     db.Day.create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.json(err));
//   },
//   findAll: function(req, res) {
//     db.Day.findAll()
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.json(err));
//   },
//   delete: function(req, res) {
//     db.Day.destroy({ where: { id: req.params.id } })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.json(err));
//   },
//   update: function(req, res) {
//     db.Day
//       .update(req.body, { where: { id: req.params.id }})
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
// };