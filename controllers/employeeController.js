const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Employee.create(req.body)
      .then(db.Employee.findAll({ where: { phone: req.body.phone } }))
      .then(dbModel => db.Sunday.create({ EmployeeId: dbModel.id, Sunday:"Sunday", shiftStartTime: "0800", shiftEndTime:"1900" , lunchStartTime: "0000", lunchEndTime: "0000" })
      .then(dbModel => db.Monday.create({ EmployeeId: dbModel.id,Monday:"Monday", shiftStartTime: "0800", shiftEndTime:"1900" , lunchStartTime: "0000", lunchEndTime: "0000" })
      .then(dbModel => db.Tuesday.create({ EmployeeId: dbModel.id, Tuesday:"Tuesday",shiftStartTime: "0800", shiftEndTime:"1900" , lunchStartTime: "0000", lunchEndTime: "0000" })
      .then(dbModel => db.Wednesday.create({ EmployeeId: dbModel.id, Wednesday:"Wednesday",shiftStartTime: "0800", shiftEndTime:"1900" , lunchStartTime: "0000", lunchEndTime: "0000" })
      .then(dbModel => db.Thursday.create({ EmployeeId: dbModel.id, Thursday:"Thursday", shiftStartTime: "0800", shiftEndTime:"1900" , lunchStartTime: "0000", lunchEndTime: "0000" })
      .then(dbModel => db.Friday.create({ EmployeeId: dbModel.id, Friday: "Friday", shiftStartTime: "0800", shiftEndTime:"1900" , lunchStartTime: "0000", lunchEndTime: "0000" })
      .then(dbModel => db.Saturday.create({ EmployeeId: dbModel.id,Saturday:"Saturday", shiftStartTime: "0800", shiftEndTime:"1900" , lunchStartTime: "0000", lunchEndTime: "0000" })
      .then(db.Day.create({ EmployeeId: dbModel.id })))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err))))))))
  },
  findAll: function (req, res) {
    db.Employee.findAll({ where: { isAdmin: false } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  delete: function (req, res) {
    db.Employee.destroy({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
