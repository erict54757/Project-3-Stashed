const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentController");

router
  .route("/")
  .post(appointmentController.create)
  .get(appointmentController.findAll);

module.exports = router;
