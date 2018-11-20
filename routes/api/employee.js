const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

// "/api/employees"
router
  .route("/")
  .post(employeeController.create)
  .get(employeeController.findAll);

// "/api/employees/:id"
router
  .route("/:id")
  .delete(employeeController.delete);

module.exports = router;
