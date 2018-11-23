const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentController");

router
  .route("/")
  .post(appointmentController.create)
  .get(appointmentController.findAll)

// "/api/appointments/:id"
router
  .route("/:id")
  .delete(appointmentController.delete);

module.exports = router;
